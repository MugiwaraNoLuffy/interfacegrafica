var traffic;
var urlTraffic;
var urlProtoc;

function getTrafficData(data){
	traffic.populateGraph(data);
	traffic.createGraph();
}

$(function(){
	traffic = new TrafficGraph();
        //pie = new PieGraph();
        //traffic.init();
        urlTraffic = "http://192.168.0.102/scriptsDB/getTrafficData.php";
//	urlFlows = "http://192.168.0.102/scriptsDB/getFlows.php";
	//var t = setTimeout(function(){getAlerts()},30000);
//	getFlows();
	$.getJSON(urlTraffic, getTrafficData);
});


