var a;

function getData(data){
	setAlerta(data.alerts);
	
}

function setAlerta(alerts)
{
	var priority = 1;
	for(var i=0; i<alerts.length; i++)
	{
		var object = alerts[i];
		if( parseInt(object.priority) > priority )
		{
			priority = parseInt(object.priority);
		}
	} 
	a.alerta(priority);
}


$(function(){
	a = new BarraAlertas();
	var url ="http://192.168.205.132/scriptsDB/getAlert.php";
	$.getJSON(url, getData);
	
});


