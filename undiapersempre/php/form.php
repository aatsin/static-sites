<?php
if ($_SERVER ["REQUEST_METHOD"] == "POST" ){

    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $child = $_POST["child"];
    $menu = $_POST["menu"];
    $song = $_POST["song"];

    $conn = new mysqli("localhost", "root", "", "undiapersempre");

    //funcio nomes lletres
    function validateName($param) {
        return preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $param);
    }
    //funcio nomes numeros
    function validatePhone($param) {
        return preg_match("/^[0-9]+$/", $param);
    }
    //funcio email
    function validateEmail($param) {
        return filter_var($param, FILTER_VALIDATE_EMAIL);
    }

    //funcio child
    function validateChild($param) {
        return $param == "0" || $param == "1";
    }
    

    if (!validateName($name) || !validateName($surname)) {
        die("El text no es vàlid. Només es permeten lletres i espais.");
    }

    if (!validatePhone($phone)) {
        die("El telèfon no és vàlid. Només es permeten números.");
    }

    if (!validateEmail($email)) {
        die("El correu electrònic no és vàlid.");
    }

    if (!validateChild($child)) {
        die("El valor de 'child' no és vàlid. Només es permeten 0 o 1.");
    }

    if ($conn->connection_error){
        die("Conexión fallida:" .$conn->connection_error);
    }

    $stmt = $conn->prepare("INSERT INTO undiapersempre (name, surname, phone, email, child, menu, song) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssiss", $name, $surname, $phone, $email, $child, $menu, $song);

    if ($stmt->execute()){
        echo "Registro exitoso";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
    $conn->close();
    

}
?>