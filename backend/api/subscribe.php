<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Rate limiting - check for abuse
session_start();
$now = time();
$rate_limit_window = 60; // 1 minute
$max_requests = 3; // Max 3 requests per minute

if (!isset($_SESSION['submit_times'])) {
    $_SESSION['submit_times'] = [];
}

// Clean old timestamps
$_SESSION['submit_times'] = array_filter($_SESSION['submit_times'], function($timestamp) use ($now, $rate_limit_window) {
    return ($now - $timestamp) < $rate_limit_window;
});

// Check if exceeded rate limit
if (count($_SESSION['submit_times']) >= $max_requests) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
    exit();
}

// Add current timestamp
$_SESSION['submit_times'][] = $now;

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Honeypot check
if (isset($input['website']) && !empty($input['website'])) {
    // Bot detected - fake success
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for subscribing!', 'subscriberCount' => 0]);
    exit();
}

// Validate input
if (!isset($input['email']) || !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

$email = trim(strtolower($input['email']));
$name = isset($input['name']) ? trim(strip_tags($input['name'])) : null; // Strip HTML tags
$newsletter = isset($input['newsletter']) ? (bool)$input['newsletter'] : true;
$type = isset($input['type']) ? $input['type'] : 'newsletter'; // 'newsletter' or 'registration'

// Additional validation
if ($name && strlen($name) > 255) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name is too long']);
    exit();
}

if (strlen($email) > 255) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email is too long']);
    exit();
}

// Database configuration
require_once __DIR__ . '/../config/database.php';

try {
    // Create connection
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed');
    }

    $conn->set_charset('utf8mb4');

    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM subscribers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Email already exists
        $stmt->close();
        $conn->close();
        echo json_encode([
            'success' => true,
            'message' => 'You are already subscribed!',
            'alreadyExists' => true
        ]);
        exit();
    }
    $stmt->close();

    // Insert new subscriber
    if ($type === 'registration' && $name) {
        // Full registration with name
        $stmt = $conn->prepare("INSERT INTO subscribers (email, name, newsletter, type, created_at) VALUES (?, ?, ?, ?, NOW())");
        $stmt->bind_param("ssis", $email, $name, $newsletter, $type);
    } else {
        // Simple newsletter signup
        $stmt = $conn->prepare("INSERT INTO subscribers (email, newsletter, type, created_at) VALUES (?, ?, ?, NOW())");
        $stmt->bind_param("sis", $email, $newsletter, $type);
    }

    if ($stmt->execute()) {
        $stmt->close();

        // Get total subscriber count
        $countResult = $conn->query("SELECT COUNT(*) as total FROM subscribers");
        $count = $countResult->fetch_assoc()['total'];

        $conn->close();

        echo json_encode([
            'success' => true,
            'message' => 'Thank you for subscribing!',
            'subscriberCount' => $count
        ]);
    } else {
        throw new Exception('Failed to save subscription');
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred. Please try again later.',
        'error' => $e->getMessage()
    ]);
}
?>
