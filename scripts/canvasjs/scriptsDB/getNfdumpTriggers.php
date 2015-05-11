<?php

	$host="localhost";
	$username="root";
	$password="root";
	$dbName="nfdump";

	$link = mysqli_connect($host, $username, $password, $dbName);
	$sql = 	"SELECT * FROM triggers WHERE 1 ORDER BY hostid";
	$result = mysqli_query($link, $sql);
	$triggers = array();
	while( $row = mysqli_fetch_object($result) )
	{
		$triggers[] = $row;

	}
	$json1 = '{"triggers":'.json_encode($triggers).'}';

	echo "$json1";

	mysqli_close($link);
?>
