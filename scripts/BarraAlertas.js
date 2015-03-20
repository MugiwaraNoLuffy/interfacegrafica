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
		/*
		$.ajax({
			url: url,
			cache: false,
			dataType: "json",
			success: 
	
		);
		*/

		$.getJSON(url, function(data){
			var priority = 0;
			for(var i=0; i<data.alerts.length; i++)
			{
				var object = data.alerts[i];
//				alert();
				if( parseInt(object.priority) > priority )
				{
					priority = parseInt(object.priority);
				}
			} 
			var a = new BarraAlertas(); a.alerta(priority);
/*			$.each(data.alerts, function(i, alarme){
				temp = parseInt(alarme.priority);
				var priority = 0;

//				alert(priority);
				if( temp > priority){ priority = temp; var a = new BarraAlertas(); a.alerta(temp);}
//				alert(priority);
			});*/
		});

	//	this.alerta(priority);
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
