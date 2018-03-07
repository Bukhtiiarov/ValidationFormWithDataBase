<?php

require 'connection.php';
$conn    = Connect();
$firstname  = $conn->real_escape_string($_POST['firstname']);
$lastname  = $conn->real_escape_string($_POST['lastname']);
$email   = $conn->real_escape_string($_POST['email']);
$phone    = $conn->real_escape_string($_POST['phone']);
$password = $conn->real_escape_string($_POST['password']);
$query   = "INSERT into tb_cform (firstname,lastname,email,phone,password) VALUES('" . $firstname . "','" . $lastname . "','" . $email . "','" . $phone . "','" . $password . "')";
$success = $conn->query($query);
 
if (!$success) {
    die("Couldn't enter data: ".$conn->error);
 
}

$conn->close(); 

header('location: index.html'); 

?>

