<?php
header('Content-Type: application/json');

// Database configuration
require_once __DIR__ . '/../config/database.php';

$response = [
    'php_version' => phpversion(),
    'mysqli_available' => extension_loaded('mysqli'),
    'config' => [
        'host' => DB_HOST,
        'user' => DB_USER,
        'database' => DB_NAME,
        'password_set' => !empty(DB_PASS)
    ]
];

try {
    // Test connection
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        $response['connection'] = 'FAILED';
        $response['error'] = $conn->connect_error;
        $response['error_number'] = $conn->connect_errno;
    } else {
        $response['connection'] = 'SUCCESS';
        $response['server_info'] = $conn->server_info;

        // Test query
        $result = $conn->query("SHOW TABLES");
        if ($result) {
            $tables = [];
            while ($row = $result->fetch_array()) {
                $tables[] = $row[0];
            }
            $response['tables'] = $tables;

            // Check if subscribers table exists
            if (in_array('subscribers', $tables)) {
                $count = $conn->query("SELECT COUNT(*) as total FROM subscribers");
                if ($count) {
                    $response['subscriber_count'] = $count->fetch_assoc()['total'];
                }
            }
        }

        $conn->close();
    }
} catch (Exception $e) {
    $response['exception'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>
