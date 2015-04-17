var a;

function getData(data){
	alert(1);
	a.setAlerta(data.alerts);
	
}

$(function(){
	a = new BarraAlertas();
	alert("Barra");
	var url ="http://192.168.205.132/scriptsDB/getAlert.php";
	
	$.getJSON(url, getData);
	
});


