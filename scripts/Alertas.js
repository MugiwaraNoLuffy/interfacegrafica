var bar;
var topology;

function getData(data){
	bar.setAlerts(data.alerts);
	topology.setAlerts(data.alerts);
}
/*
function setBarAlert(alerts)
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
	barra.alerta(priority);
}
*/

$(function(){
	bar = new AlertsBar();
	topology = new Topology();
	topology.init();
	var url ="http://192.168.0.102/scriptsDB/getAlert.php";
	$.getJSON(url, getData);
	
});


