function BarraAlertas()
{
	var barraId = "#cabecalho";
	const VERDE = 1;
	const AMARELO = 2;
	const LARANJA = 3;
	const VERMELHO = 4;
	const VERMELHOESC = 5;	
	var priority = 2;
	
	this.getAlerta = function ()
	{
		var url ="scriptsDB/getAlert.php";
		var temp = 1;

		$.getJSON(url, function(data){
			$.each(data.alerts, function(i, alarme){
				temp = parseInt(alarme.priority);
//				alert(priority);
				if( temp > priority){ this.priority = temp;}
//				alert(priority);
			});
		});

		this.alerta(this.priority);
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
				$(barraId).css({"background-color": "#FF3300"});
				break;
			case VERMELHOESC:
				$(barraId).css({"background-color": "#FF0033"});
				break;
		}
	}
}
