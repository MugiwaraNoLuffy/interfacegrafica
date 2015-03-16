function BarraAlertas()
{
	var barraId = "#cabecalho";
	const VERDE = 1;
	const AMARELO = 2;
	const LARANJA = 3;
	const VERMELHO = 4;
	const VERMELHOESC = 5;

	
	
	this.alerta = function (nivel)
	{
		alert(nivel);
		switch(nivel)
		{
			case VERDE: // no alert
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
		alert(2);
	}
}
