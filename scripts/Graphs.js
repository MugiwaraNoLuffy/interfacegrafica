var traffic;
var urlTraffic;
var urlProtoc;

function getData(data){
	var saida = data.entrada;
	for(var i=0; i< 20; i++){
		var item1 = saida[i];
		alert(parseInt(item1.value));
	}
	//traffic.populateGraph(data.trafego);
}

$(function(){
	//traffic = new TrafficGraph();
        //pie = new PieGraph();
        //traffic.init();
        urlTraffic = "http://192.168.0.102/scriptsDB/getTrafficData.php";
//	urlFlows = "http://192.168.0.102/scriptsDB/getFlows.php";
	//var t = setTimeout(function(){getAlerts()},30000);
//	getFlows();
	$.getJSON(urlTraffic, getData);
});


