<?php

	$host="localhost";
	$username="root";
	$password="root";
	$dbName="zabbix";

	$link = mysqli_connect($host, $username, $password, $dbName);
	$sql = "SELECT * FROM triggers WHERE value=1";

	$result = mysqli_query($link, $sql);
	$alerts = array();
	while( $row = mysqli_fetch_object($result) )
	{
		$alerts[] = $row;
	}

	echo '{"alerts":'.json_encode($alerts).'}';
	mysqli_close($link);
?>
