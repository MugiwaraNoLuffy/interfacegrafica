<?php

	$host="localhost";
	$username="root";
	$password="root";
	$dbName="zabbix";

	$link = mysqli_connect($host, $username, $password, $dbName);
	$sql = "SELECT triggerid,description,priority FROM triggers WHERE value=1";

	$result = mysqli_query($link, $sql);
	$alerts = array();
	while( $row = mysqli_fetch_object($result) )
	{
		$alerts[] = $row;
	}
/*	foreach($alerts as $al){
		echo "$al->priority";
	}
*/	$json1 = '{"alerts":'.json_encode($alerts).'}';
	echo "$json1";
	$alertas = json_decode($json1);
	$aler = $alertas->alerts;
/*	foreach( $aler as $a )
	{
		
		echo "$a->priority";
	}
*/
	mysqli_close($link);
?>
