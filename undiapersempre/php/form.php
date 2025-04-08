<?php

include_once("db.php");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER ["REQUEST_METHOD"] == "POST" ){

    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $child = $_POST["child"];
    $menu = $_POST["menu"];
    $song = $_POST["song"];


    function validateName($param) {
        return preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $param);
    }
    function validatePhone($param) {
        return preg_match("/^[0-9]+$/", $param);
    }
    function validateEmail($param) {
        return filter_var($param, FILTER_VALIDATE_EMAIL);
    }
    function validateChild($param) {
        return $param == "0" || $param == "1";
    }
    

    if (!validateName($name) || !validateName($surname)) {
        echo json_encode(["status" => "error", "message" => "The name and surname must only contain letters and spaces."]);
        exit;
    }
    
    if (!validatePhone($phone)) {
        echo json_encode(["status" => "error", "message" => "The phone number is invalid. Only numbers are allowed."]);
        exit;
    }

    if (!validateEmail($email)) {
        echo json_encode(["status" => "error", "message" => "The email address is invalid."]);
        exit;
    }

    if (!validateChild($child)) {
        echo json_encode(["status" => "error", "message" => "The child parameter is invalid. Only numbers 0 or 1 are allowed."]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO undiapersempre (name, surname, phone, email, child, menu, song) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssiss", $name, $surname, $phone, $email, $child, $menu, $song);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Record successfully inserted."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
}

?>