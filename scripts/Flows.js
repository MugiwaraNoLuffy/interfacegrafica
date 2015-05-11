function Flows(){
	this.setFlows = function(flows){
		var flowData = 
			'<table id="topFlows" style="font-size: 14px; border-radius: 10px;">\
				<tr style=" font-weight: 900 ;padding: 7px; background-color: gray; color: white; z-index: 3;">\
					<td style=" padding: 7px;">IP fonte</td>\
					<td style=" padding: 7px;">IP destino</td>\
					<td style=" padding: 7px;">Porta src</td>\
					<td style=" padding: 7px;">Porta tgt</td>\
					<td style=" padding: 7px;">Bytes</td>\
				</tr>';
		var background = "white";
		var font = "black";
		for(var i=0; i<flows.length; i++)
		{
			flowData=flowData+'<tr style=" font-weight: 800 ;padding: 7px; background-color: ' +background+'; color:'+font+'; z-index: 3;">\
						<td style=" padding: 7px;">' +flows[i].ipsource+'</td>\
						<td style="padding: 7px">'+flows[i].iptarget+'</td>\
						<td style="padding: 7px">'+flows[i].portsource+'</td>\
						<td style="padding: 7px">'+flows[i].porttarget+'</td>\
						<td style="padding: 7px">'+flows[i].bytes+'</td>\
						</tr>';
			if(background == "white")
			{
				background = "gray";
				font = "white";
			}
			else{
				background = "white";
				font = "black";
			}
		}
		flowData = flowData+"</table>";
		document.getElementById("flows").innerHTML = flowData;
		//$("#topFlows, td").css({"border": "2px solid #aaaaaa"});
		$("#topFlows").css({"z-index": "3"});
		
	}

}
