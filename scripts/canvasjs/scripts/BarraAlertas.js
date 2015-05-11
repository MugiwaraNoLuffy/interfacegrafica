function AlertsBar()
{
	var barraId = "#cabecalho";
	const VERDE = 1;
	const AMARELO = 2;
	const LARANJA = 3;
	const VERMELHO = 4;
	const VERMELHOESC = 5;	
	var priority = 0;
	
	this.setAlerts = function (alerts)
	{
		var alertTable = '<table id="alertas">';
		var priority = 1;
		for(var i=0; i<alerts.length; i++)
		{
			var object = alerts[i];
			var color=this.alertColor(alerts[i].priority);
			alertTable=alertTable+'<tr style=" font-weight: 900 ;padding: 7px; background-color: ' +color+'; color: white; z-index: 3;"><td style=" padding: 7px;">' +alerts[i].host+'</td><td style="padding: 7px">'+alerts[i].description+"</td></tr>";
			if( parseInt(object.priority) > priority )
			{
				priority = parseInt(object.priority);
			}
		}
		alertTable = alertTable+"</table>";
		document.getElementById("barraAlertas").innerHTML = alertTable;
		$("#alertas, td").css({"border": "2px solid #aaaaaa"});
		$("#alertas").css({"z-index": "3"});
		
		
		this.alerta(priority);
	}

	//---------------------------------
	this.alertColor = function(priority){
		switch(priority){
			case '1':
				return "#00FF00";
			case '2':
				return "#FFFF00";
			case '3':
				return "#FF9900";
			case '4':
				return "#FF8a62";
			case '5':
				return "#FF0033";
		}
	}
	
	this.alerta = function (nivel)
	{
		switch(nivel)
		{
			case VERDE: 
				$(barraId).css({"background-color": "#00FF00"});
				break;
			case AMARELO: 
				$(barraId).css({"background-color": "#FFFF00"});
				break;
			case LARANJA:
				$(barraId).css({"background-color": "#FF9900"});
				break;
			case VERMELHO:
				$(barraId).css({"background-color": "#FF8a62"});
				break;
			case VERMELHOESC:
				$(barraId).css({"background-color": "#FF0033"});
				break;
		}
	}
}
