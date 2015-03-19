<?php 
function startConnection(){
	$server = "localhost";
	$username = "root";
	$pass = "root";
	$db = "zabbix";

	$conn = new mysqli($server, $username, $pass, $db);
	if ($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}
	else{
		echo "<b>Connection Ok!</b>";
	}	
	return selectAlertas($conn);
}
function selectAlertas($conn){
	$sql = "SELECT * FROM triggers WHERE value=1";
	$alertas = $conn->query($sql);
	if(mysqli_num_rows($alertas) > 0)
		return $alertas;
	else
		return NULL;
}

?>


