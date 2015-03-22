<?php

	$host="localhost";
	$username="root";
	$password="root";
	$dbName="zabbix";

	$link = mysqli_connect($host, $username, $password, $dbName);
//	$sql = "SELECT triggerid,description,priority FROM triggers WHERE value=1";
	$sql = 	"SELECT triggers.description,triggers.priority,hosts.host,interface.ip FROM triggers INNER JOIN functions ON (triggers.triggerid=functions.triggerid) INNER JOIN items ON (functions.itemid=items.itemid) INNER JOIN hosts ON (items.hostid=hosts.hostid) INNER JOIN interface ON (interface.interfaceid=items.interfaceid) WHERE triggers.value=1";
	$result = mysqli_query($link, $sql);
	$alerts = array();
	while( $row = mysqli_fetch_object($result) )
	{
		$alerts[] = $row;
//		echo "$row->triggerid";
	}
	$json1 = '{"alerts":'.json_encode($alerts).'}';
//	echo serialize($alerts[0]);
	echo "$json1";
	echo "\n\0";
	$alertas = json_decode($json1);

/*	foreach( $aler as $a )
	{

		echo "$a->priority";
	}
*/
	mysqli_close($link);
?>
