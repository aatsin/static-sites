<?php
define('CLIENT_EMAIL', 'unidiapersempre@websbodas.com');
define('PASSWORD_MD5', '1f3870be274f6c49b3e31a0c6728957f'); 

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

function isUserAuthenticated() {
    if (!isset($_COOKIE['user-token'])) {
        return false;
    }
    

    $expectedToken = md5(CLIENT_EMAIL . PASSWORD_MD5);
    return $_COOKIE['user-token'] === $expectedToken;
}
?>
