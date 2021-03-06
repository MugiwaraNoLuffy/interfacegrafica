function Topology(){
	var myDiagram;
	var model;
	var $;
	var nodeDataArray;
	var nodeData;
	this.init = function(){
		var $ = go.GraphObject.make;
		//---------------- Diagram interation ------------
		myDiagram =
		$(go.Diagram, "topoField",
		{
		initialContentAlignment: go.Spot.Center, // Center Diagram contents
		"undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
		}
		);
		//---------------- Nodes configuration ------------
		myDiagram.nodeTemplate =
		$(go.Node, "Vertical",
			{ 
				locationSpot: go.Spot.Center, locationObjectName: "SHAPE",
				layerName: "Background"
				//mouseOver: function (e, obj) { this.showPoint(obj.part.location); },
				//doubleClick: function(e, obj){ teste(e, obj);} 
			},
			new go.Binding("location", "loc", go.Point.parse), 
	      		{
				selectionAdornmentTemplate: $(go.Adornment, "Auto",
					$(go.Shape, "RoundedRectangle",
		    				{ fill: null, stroke: "red", strokeWidth: 2 },
		    				new go.Binding("stroke", "color")
					),
		    			$(go.Placeholder)
		  		)
	      		},
		    	{ background: "#FFFFFF" },
	   		$(go.Panel, "Spot", 
				$(go.Panel, "Auto", 
					$(go.Picture,
	      					{ margin: 3, width: 70, height: 60, background: "#FFFFFF" },
			      			new go.Binding("source")
					)
				)
			),
	    		$(go.TextBlock, "Default Text", 
	      			{ margin:3, stroke: "black", font: "bold 16px sans-serif" },
	      			new go.Binding("text", "key"),
	      			new go.Binding("text", "name")
	    		),  
	    		$(go.Panel, "Auto",
	      			$(go.Shape, {fill: null, stroke: null, strokeWidth: 2}, new go.Binding("background", "problem", this.nodeProblem)), // problem
	      			$(go.TextBlock, "Ok",
					{ margin: 5, stroke: "green", font: "bold 16px sans-serif" },
					new go.Binding("stroke", "color"),
					new go.Binding("text", "status")
	    			)
			)
	    
	  	);
	//---------------- Links configuration ------------
	myDiagram.linkTemplate =
		$(go.Link,
			$(go.Shape, { strokeWidth: 3, stroke: "#555" },
				new go.Binding("stroke", "problem", this.linkProblemConverter)
			)
		); // the link shape
	//-------------------------------------------------
	model = $(go.Model);
	this.nodeDataArray =
		[ { key: "10105", name: "Server Jira", source: "images/pc.png", loc: "114 495", color: "green", status: "Ok"},
		  { key: "10108", name: "PC", source: "images/pc.png", loc: "363 517", color: "green", status: "Ok"},
		  { key: "10109", name: "Server Web", source: "images/pc.png", loc: "622 469", color: "green",status: "Ok"},
		  { key: "10107", name: "Router", source: "images/router.png", loc: "366 290", color: "green" ,status: "Ok"},
		  { key: "5", name: "Internet",  source: "images/cloud.png", loc: "373 63", color: "green", status: "Ok"},
		];
	//nodeDataArray.push({ key: "4", name: "Switch", source: "images/switch.png", loc: "300 300", color: "yellow" });
	nodeData = 
		[ ["10105", []],
  	 	  ["10108", []],
		  ["10109", []],
		  ["10107", []],
		  ["5", []],
		];

	var links = [{from: "10105", to: "10107" }, {from: "10108", to: "10107"}, {from: "10109", to: "10107"}, {from: "5", to: "10107"}];



	//alert( nodeDataArray[0]['']);
	//addNode(nodeDataArray, "5", "HOST");
	//myDiagram.model.addLinkData({ from: "Router", to: "PC" });
	//addLink(myDiagram, "1", "5");
	myDiagram.model = new go.GraphLinksModel(this.nodeDataArray, links);
	//nodeDataArray[0]['color'] = "red";
	//myDiagram.model = new go.GraphLinksModel(nodeDataArray, links);



	//model.nodeDataArray[1].problem = "red";
	//myDiagram.model = new go.GraphLinksModel(nodeDataArray, links);
	myDiagram.model.updateTargetBindings(myDiagram.model.nodeDataArray[0]);

	myDiagram.addDiagramListener("ObjectSingleClicked", teste);

	}
	function teste(e, obj) {

		 var clicked = e.subject.part;
		      if (clicked !== null) {
		        var node = clicked.data;
			var nodeName = node.name;
			var alertTable = '<table id=nodeAlert style="border: 2px solid #aaaaaa; z-index: 3;">';
			var table = document.getElementById("alertas");
			var color;
		        for (var r = 0, n = table.rows.length; r < n; r++) {
				if( nodeName == table.rows[r].cells[0].innerHTML )
				{					
					var color = table.rows[r].style.backgroundColor;
					alertTable=alertTable+'<tr style=" font-weight: 900 ;padding: 7px; background-color: ' +color+'; color: white; z-index: 3;"><td style=" padding: 7px;">' +table.rows[r].cells[0].innerHTML+'</td><td style="padding: 7px">'+table.rows[r].cells[1].innerHTML+"</td></tr>";
				}

		        }
			alertTable = alertTable+"</table>";
			var topo = document.getElementById("alertasTopo");
			topo.innerHTML = alertTable;
			if(topo.style.display == "none") topo.style.display = "table";
			else topo.style.display = "none";
			document.getElementById("barraAlertas").style.display = "none";
//			$("#alertas, td").css({"border": "2px solid #aaaaaa"});
//			$("#alertas").css({"z-index": "3"});

//			alert(text.outerHTML);
			/*var alertTable = "<table id=alertas>";
			var color=this.alertColor(alerts[i].priority);
			alertTable=alertTable+'<tr style=" font-weight: 900 ;padding: 7px; background-color: ' +color+'; color: white; z-index: 3;"><td style=" padding: 7px;">' +nodeData[i][1].host+'</td><td style="padding: 7px">'+nodeData[i][1].description+"</td></tr>";*/
		}
/*		e.subject.part.data.color = "blue";
		e.subject.part.data.status = "Teste";
		alert(this.nodeDataArray[0].key);
	//	var node = this.searchNode(this.nodeDataArray, e.subject.part.data.key);
	//	alert(node);
//		this.myDiagram.model.nodeDataArray[node].status = "hahahhaha";
//		node.color = "red";
//		updateDiagram(node);
		//alert(obj.part);
		/*var alertTable = '<table id="alertas">';
		var part = e.subject.part;
		var color=this.alertColor(alerts[i].priority);
		alertTable=alertTable+'<tr style=" font-weight: 900 ;padding: 7px; background-color: ' +color+'; color: white; z-index: 3;"><td style=" padding: 7px;">' +alerts[i].host+'</td><td style="padding: 7px">'+alerts[i].description+"</td></tr>";
		*/
//		if (!(part instanceof go.Link)) alert("Clicked on " + part.data.loc);
	      }
	this.updateDiagram = function (item){
		myDiagram.model.updateTargetBindings(myDiagram.model.nodeDataArray[item]);
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
	//---------------------------------
	this.linkProblemConverter = function (msg) {
		if (msg) return "red";
		return "black";
	}
	//---------------------------------
	this.nodeProblemConverter = function (msg) {
		if (msg) return msg;
		return null;
	}
	//---------------------------------
	this.nodeProblem = function (color){
		return color;
	}
	//---------------------------------
	this.addNode = function (arrayNode, key, name){
		var insert = searchNode(arrayNode, key);
		alert( name );
		if( insert == true ){
			alert(1);
		}
		arrayNode.push({key: key, name: name, source: "images/switch.png", loc: "380 250", color: "pink"});
	}
	//---------------------------------
	this.addLink = function (diagram, hostA, hostB){
		diagram.model.addLinkData({ from: hostA, to: hostB });
	}
	//---------------------------------
	this.searchNode = function (arrayNode, key)
	{
		for(var i = 0; i < arrayNode.length; i++)
		{
			if(arrayNode[i]['key'] == key)
				return i;
		}
		return -1;
	}
	//---------------------------------
	this.showPoint = function (loc) {
	    var docloc = myDiagram.transformDocToView(loc);
	/*	var elt = document.getElementById("Message1");
	    elt.textContent = "document: " + loc.x.toFixed(2) + " " + loc.y.toFixed(2) +
		              "  view: " + docloc.x.toFixed(2) + " " + docloc.y.toFixed(2);*/
	  }
	//---------------------------------
	this.alertColor = function(priority){
		switch(priority){
			case '1':
				return "green";
			case '2':
				return "yellow";
			case '3':
				return "orange";
			case '4':
				return "#FF8a62";
			case '5':
				return "red";
		}
	}

	//---------------------------------
	this.setAlerts = function (alerts)
	{
		var index = -1;
		for(var i=0; i<alerts.length; i++)
		{
			//alert(1);
			index = this.searchNode(this.nodeDataArray, alerts[i].hostid);
			//alert(index+": "+alerts[i].priority);
			if(index != -1)
			{
				nodeData[index][1][nodeData[index][1].length] = alerts[i];
				//nodeArray[index]['alerts'][nodeArray[index]['alerts'].length] = alerts[i];
		/*		myDiagram.model.nodeDataArray[index].color = this.alertColor(alerts[i].priority);
				this.updateDiagram(index);
		*/		//alert(alerts[index].hostid);
			}
		}
		var priority = 1;
		for(var i=0; i<nodeData.length; i++)
		{
			var priority = 1;
			nodeAlert = nodeData[i][1];
			for(var j = 0; j < nodeAlert.length; j++){
				if(nodeAlert[j].priority > priority){
					priority = nodeAlert[j].priority;
					myDiagram.model.nodeDataArray[i].color = this.alertColor(priority);
					myDiagram.model.nodeDataArray[i].status = nodeAlert[j].description;
				}
			}
			this.updateDiagram(i);
		}
		
	}
}
