<?php

include_once("getCookie.php");

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if (!isUserAuthenticated()) {
    echo json_encode(["status" => "error", "message" => "Unauthorized"]);
    http_response_code(401);
    exit;
}

include_once("db.php");

$query = "SELECT * FROM undiapersempre";
$result = $conn->query($query);

$response = [];

while ($row = $result->fetch_assoc()) {
    $response[] = [
        'id' => $row['id'],
        'name' => $row['name'],
        'surname' => $row['surname'],
        'phone' => $row['phone'],
        'email' => $row['email'],
        'child' => $row['child'],
        'menu' => $row['menu'],
        'song' => $row['song'],        
    ];
}

echo json_encode($response);


?>