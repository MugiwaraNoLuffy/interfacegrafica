var bar;
var topology;
var urlAlerts;
var urlFlows;

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
	flows = new Flows();
        topology.init();
        urlAlerts = "http://192.168.0.102/scriptsDB/getAlert.php";
	urlFlows = "http://192.168.0.102/getFlows.php";
	//var t = setTimeout(function(){getAlerts()},30000);
	getFlows();
	getAlerts();
});

function getAlerts(){
	$.getJSON(urlAlerts, getData);
	
}

function getFlows(){
	$.getJSON(urlFlows, getTopFlows);
}

function getTopFlows(data){
	flows.setFlows(data.flows);
	//document.getElementById("flows").innerHTML = data.flows[0];
}
