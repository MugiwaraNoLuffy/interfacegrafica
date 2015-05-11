var TrafficGraph(){
	
	this.populateGraph = function(data){
	
	}
	this.populateGraph = function (entrada, saida) {
    		var chart = new CanvasJS.Chart("chartContainer",
		{
		        title: {
        			text: "Trafego"             
		        },
			animationEnabled: true,
			axisX:{      
				interval: 10,
				valueFormatString: "HHmm"
			},
			axisY: {
				title: "bps",
				interval: 10
			},
			legend: {
				verticalAlign: "bottom",
				horizontalAlign: "center"
			},
			data: [{
				name: "Entrada",
				showInLegend: true,
				legendMarkerType: "square",
				type: "area",
				color: "rgba(40,175,101,0.6)",
				markerSize: 0,
				dataPoints: [
					{x:new Date(2013,0,1,00,00) ,label: "midnight", y: 7  },
					{x:new Date(2013,0,1,00,01) , y: 8},
					{x:new Date(2013,0,1,00,02) , y: 5}
				]
				},
				{        
				name: "Saida",
				showInLegend: true,
				legendMarkerType: "square",
				type: "area",
				color: "rgba(0,75,141,0.7)",
				markerSize: 0,
				label: "bps",
				dataPoints: [

					{x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
					{x:new Date(2013,0,1,00,01) , y: 10}.
					{x:new Date(2013,0,1,00,02) , y: 10}
				]
				}
			]
		});
		chart.render();
	}
	}
}
