<?php
if(isset($_POST['submit'])) {
	
	$to = "nabaraj.cn@gmail.com";
	$from = $_POST['email'];
	$subject = "Get in touch";
	
	$message = "<table>";
	$message .= "<tr><td><strong>Name:</strong></td><td>".$_POST['nameInput']."</td></tr>";
	$message .= "<tr><td><strong>Email address:</strong></td><td>".$_POST['email']."</td></tr>";
	$message .= "<tr><td><strong>Phone Number:</strong></td><td>".$_POST['phoneno']."</td></tr>";
	$message .= "<tr><td><strong>Message:</strong></td><td>".$_POST['tellus']."</td></tr>";
	
	
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: ' .$from. "\r\n";
	
	if (mail($to, $subject, $message, $headers)) {
		header("location:index.html");
	} 
} 
?>
