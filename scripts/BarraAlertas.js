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
		var priority = 1;
		for(var i=0; i<alerts.length; i++)
		{
			var object = alerts[i];
			if( parseInt(object.priority) > priority )
			{
				priority = parseInt(object.priority);
			}
		} 
		this.alerta(priority);
		alert(priority);
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
