<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "second_mart";


$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);


$stmt = $conn->prepare("INSERT INTO contactdetails (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);


if ($stmt->execute()) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $stmt->error;
}


$stmt->close();
$conn->close();

?>