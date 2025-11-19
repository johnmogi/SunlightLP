<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
require_once __DIR__ . '/../config/database.php';

try {
    // Create connection
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Connection failed: ' . $conn->connect_error);
    }

    // Get subscriber count
    $result = $conn->query("SELECT COUNT(*) as total FROM subscribers");

    if (!$result) {
        throw new Exception('Query failed: ' . $conn->error);
    }

    $count = $result->fetch_assoc()['total'];

    $conn->close();

    echo json_encode([
        'success' => true,
        'count' => (int)$count
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to retrieve count',
        'error' => $e->getMessage(),
        'count' => 0
    ]);
}
?>
