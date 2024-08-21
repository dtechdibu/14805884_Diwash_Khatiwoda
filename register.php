<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $userData = "$username|$email|$password\n";
    file_put_contents('users.txt', $userData, FILE_APPEND);

    echo '<p>Registration successful! You can now <a href="index.html">login</a>.</p>';
}
?>
