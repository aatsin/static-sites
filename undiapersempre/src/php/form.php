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

    $sql = "INSERT INTO invite (name, surname, phone, email, adult_kid, comments) VALUES ('$name', '$surname', '$phone', '$email', '$adult_kid', '$comments')";

    if ($conn->query($sql) === TRUE){
        echo "Registro exitoso";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();

}
?>