<?php
session_start();
include_once("db.php"); 

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

define('CLIENT_EMAIL', 'unidiapersempre@websbodas.com');
define('PASSWORD_MD5', '1f3870be274f6c49b3e31a0c6728957f');  //password apple

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST["email"];
    $pass = $_POST["password"];

    $newPass = md5($pass);

    if ($email == CLIENT_EMAIL && $newPass === PASSWORD_MD5) {
        
        $token = md5($email . $newPass);
   
        setcookie("user-token", $token, time() + 86400, "/"); 

        echo json_encode(["status" => "success", "message" => "Login successful"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
