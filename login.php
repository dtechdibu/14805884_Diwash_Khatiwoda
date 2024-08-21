<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $users = file('users.txt', FILE_IGNORE_NEW_LINES);

    foreach ($users as $user) {
        list($stored_username, $stored_email, $stored_password) = explode('|', $user);
        if ($username === $stored_username && password_verify($password, $stored_password)) {
            $_SESSION['loggedin'] = true;
            header('Location: home.html');
            exit();
        }
    }

    echo '<p>Invalid username or password</p>';
}
?>
