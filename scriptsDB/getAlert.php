<?php

	$host="localhost";
	$username="root";
	$password="root";
	$dbZabbix="zabbix";
	$dbNfdump="nfdump";

	/*
	 * Carrega alertas zabbix
	 */
	$link = mysqli_connect($host, $username, $password, $dbZabbix);

	$sql = 	"SELECT triggers.description,triggers.priority,hosts.host,hosts.hostid FROM triggers INNER JOIN functions ON (triggers.triggerid=functions.triggerid) INNER JOIN items ON (functions.itemid=items.itemid) INNER JOIN hosts ON (items.hostid=hosts.hostid) INNER JOIN interface ON (interface.interfaceid=items.interfaceid) WHERE triggers.value=1";
	$result = mysqli_query($link, $sql);
		
	$alerts = array();
	while( $row = mysqli_fetch_object($result) )
	{

		$row->description =  str_replace("{HOST.NAME}", $row->host, $row->description );
		unset($row->host);
		$alerts[] = $row;
	}

	/*
	 * Carrega alertas nfdump
	 */
	
	$sql = "SELECT description,priority,hostid FROM triggers WHERE value=1";
	
	$link = mysqli_connect($host, $username, $password, $dbNfdump);
	$result = mysqli_query($link, $sql);
	
  	while( $row = mysqli_fetch_object($result) )
        {
                $alerts[] = $row;
        }	
	
	/*
	 * Json encode
	 */
	
	$json1 = '{"alerts":'.json_encode($alerts).'}';
	echo "$json1";

	mysqli_close($link);
?>
