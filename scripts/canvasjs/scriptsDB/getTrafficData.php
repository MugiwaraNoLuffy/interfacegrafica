<?php

	$host="localhost";
	$username="root";
	$password="root";
	$dbZabbix="zabbix";

	/*
	 * Carrega alertas zabbix
	 */
	$link = mysqli_connect($host, $username, $password, $dbZabbix);

	$sql = 	"SELECT history_uint.itemid,history_uint.value,history_uint.clock FROM `history_uint` INNER JOIN items ON (items.hostid=10107 AND items.key_='trafego.entrada') WHERE history_uint.itemid=items.itemid ORDER BY clock DESC limit 30";
	$result = mysqli_query($link, $sql);
		
	$trafego_entrada = array();
	while( $row = mysqli_fetch_object($result) )
	{

		$trafego_entrada[] = $row;
	}

	/*
	 * Carrega alertas nfdump
	 */
	
	$sql = "SELECT history_uint.itemid,history_uint.value,history_uint.clock FROM `history_uint` INNER JOIN items ON (items.hostid=10107 AND items.key_='trafego.saida') WHERE history_uint.itemid=items.itemid ORDER BY clock DESC limit 30";
	
	$result = mysqli_query($link, $sql);
	$trafego_saida = array();
  	while( $row = mysqli_fetch_object($result) )
        {
                $trafego_saida[] = $row;
        }	
	
	/*
	 * Json encode
	 */	

	$json1 = '{"trafego":[{"entrada":'.json_encode($trafego_entrada).'}, {"saida":'.json_encode($trafego_saida).'}]}';

	echo "$json1";

	mysqli_close($link);
?>
