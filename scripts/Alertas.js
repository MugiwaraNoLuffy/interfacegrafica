var bar;
var topology;
var url;

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
        url ="http://192.168.0.102/scriptsDB/getAlert.php";
	var t = setTimeout(function(){getAlerts()},30000);
	getAlerts();
});

function getAlerts(){
	$.getJSON(url, getData);
	
}


