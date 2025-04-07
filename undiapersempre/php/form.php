<?php
if ($_SERVER ["REQUEST_METHOD"] == "POST" ){

    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $adult_kid = $_POST["adult_kid"];
    $comments = $_POST["comments"];

    $conn = new mysqli("localhost", "root", "", "undiapersempre");

    if ($conn->connection_error){
        die("Conexión fallida:" .$conn->connection_error);
    }

    $stmt = $conn->prepare("INSERT INTO invite (name, surname, phone, email, adult_kid, comments) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $surname, $phone, $email, $adult_kid, $comments);

    if ($stmt->execute()){
        echo "Registro exitoso";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close():
    $conn->close();
    

}
?>