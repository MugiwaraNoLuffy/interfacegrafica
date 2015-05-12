function TrafficGraph(){
	var hostid;
	var entrada = [];
	var saida = [];
	var units = "bps";

	this.init = function(host){
		hostid = host;
	}

	this.populateGraph = function(data){
		entrada = [];
		saida = [];
		var time;
		for(var i=0; i < data.entrada.length; i++){
			time = new Date(Number(data.entrada[i].clock)*1000);
			entrada[entrada.length] = {x: time,  y: Number(data.entrada[i].value) };
			time = new Date(Number(data.saida[i].clock)*1000);
			saida[saida.length] = {x: time,  y: Number(data.saida[i].value) };
		}
	}
	
	this.createGraph = function () {
   		var chart = new CanvasJS.Chart("trafego",
		{
		        title: { text: "Trafego" },
			animationEnabled: true,
			axisX:{ interval: 100, valueFormatString: "HH:mm"	},
			axisY: { title: units, interval: 1000 },
			legend:{ verticalAlign: "bottom", horizontalAlign: "center" },

			data: [{
				name: "Entrada",
				showInLegend: true,
				legendMarkerType: "square",
				type: "area",
				color: "#FF0033",
				markerSize: 0,
				dataPoints: entrada
				},
				{
				name: "Saida",
				showInLegend: true,
				legendMarkerType: "square",
				type: "area",
				color: "#00BFFF",
				markerSize: 0,
				label: units,
				dataPoints: saida
				}
			]
		});
		chart.render();
	}

}
