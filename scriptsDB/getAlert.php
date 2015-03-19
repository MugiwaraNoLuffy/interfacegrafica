<?php

	$q=$_GET[""];

	$host="localhost";
	$username="root";
	$password="root";
	$dbName="zabbix";

	$link = mysql_connect("$host", "$username", "$password", "$dbName");
	$sql = "SELECT * FROM triggers WHERE value=1";

	$result = mysql_query($sql);

	while( $row = mysql_fetch_array($result) )
	{
		echo json_encode($row);
	}
	mysql_close($link);
?>
