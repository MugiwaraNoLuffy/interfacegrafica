<?php
$host		= "localhost";
$username	= "root";
$password	= "root";
$dbName		= "nfdump";
$link 		= mysqli_connect($host, $username, $password, $dbName);


$description 	= $_POST["description"];
$hostid		= $_POST["hostid"];
$protocol	= $_POST["protocol"];
$direction	= $_POST["direction"];
$threshold	= $_POST["threshold"];
$comparative	= $_POST["comparative"];
$priority	= $_POST["priority"];

// buscar no banco hostid e protocolid

$sql 		= "INSERT INTO triggers (description,hostid,protocolid,direction,threshold,comparative,priority) VALUES  ('$description','$hostid','$protocol','$direction','$threshold','$comparative','$priority')";

//echo $sql;
if( mysqli_query($link, $sql) == TRUE){
	echo "Success!!!";

}//
else{	
	echo mysqli_error($link);
}
mysqli_close($link);
//echo "Trigger adicionado com sucesso!!";

?>
