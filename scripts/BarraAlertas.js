function BarraAlertas()
{
	var barraId = "#cabecalho";
	const VERDE = 1;
	const AMARELO = 2;
	const LARANJA = 3;
	const VERMELHO = 4;
	const VERMELHOESC = 5;	
	var priority = 0;
	
	this.getAlerta = function ()
	{
		var url ="scriptsDB/getAlert.php";
		var temp = 1;

		$.getJSON(url, function(data){
			var priority = 0;
			for(var i=0; i<data.alerts.length; i++)
			{
				var object = data.alerts[i];
				if( parseInt(object.priority) > priority )
				{
					priority = parseInt(object.priority);
				}
			} 
			var a = new BarraAlertas(); a.alerta(priority);
		});
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
				$(barraId).css({"background-color": "#F43292"});
				break;
			case VERMELHOESC:
				$(barraId).css({"background-color": "#FF0033"});
				break;
		}
	}
}
