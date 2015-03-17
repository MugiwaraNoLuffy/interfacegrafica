<?php 
	$server = "localhost";
	$username = "root";
	$pass = "root";
	$db = "zabbix";

	$conn = new mysqli($server, $username, $pass, $db);
	if ($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}
	else{
		echo "Connection Ok!!!!!!!!!!";
	}

?>
