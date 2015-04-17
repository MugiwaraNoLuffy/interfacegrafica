var myDiagram;
$(function(){
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
			layerName: "Background",
			mouseOver: function (e, obj) { showPoint(obj.part.location); }
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
      					{ margin: 10, width: 70, height: 60, background: "#FFFFFF" },
		      			new go.Binding("source")
				)
			)
		),
    		$(go.TextBlock, "Default Text", 
      			{ margin: 5, stroke: "black", font: "bold 16px sans-serif" },
      			new go.Binding("text", "key"),
      			new go.Binding("text", "name")
    		),  
    		$(go.Panel, "Auto",
      			$(go.Shape, {fill: null, stroke: null, strokeWidth: 2}, new go.Binding("background", "problem", nodeProblem)), // problem
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
			new go.Binding("stroke", "problem", linkProblemConverter)
		)
	); // the link shape
//-------------------------------------------------
var model = $(go.Model);
nodeDataArray =
	[ { key: "1", name: "PC 1", source: "images/pc.png", loc: "114 495", color: "green"},
	  { key: "2", name: "PC 2", source: "images/pc.png", loc: "363 517", color: "green"},
	  { key: "3", name: "PC 3", source: "images/pc.png", loc: "622 469", color: "green"},
	  { key: "4", name: "Router", source: "images/router.png", loc: "366 290", color: "green" },
	  { key: "5", name: "Internet",  source: "images/cloud.png", loc: "373 63", color: "green"},
	];

//nodeDataArray.push({ key: "4", name: "Switch", source: "images/switch.png", loc: "300 300", color: "yellow" });


var links = [{from: "1", to: "4" }, {from: "2", to: "4"}, {from: "3", to: "4"}, {from: "5", to: "4"}];



//alert( nodeDataArray[0]['']);
//addNode(nodeDataArray, "5", "HOST");
//myDiagram.model.addLinkData({ from: "Router", to: "PC" });
//addLink(myDiagram, "1", "5");
myDiagram.model = new go.GraphLinksModel(nodeDataArray, links);
nodeDataArray[0]['color'] = "red";
//myDiagram.model = new go.GraphLinksModel(nodeDataArray, links);



//model.nodeDataArray[1].problem = "red";
//myDiagram.model = new go.GraphLinksModel(nodeDataArray, links);
myDiagram.model.updateTargetBindings(myDiagram.model.nodeDataArray[0]);

myDiagram.addDiagramListener("ObjectSingleClicked",
      function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)) alert("Clicked on " + part.data.loc);
      });

});


function linkProblemConverter(msg) {
	if (msg) return "red";
	return "black";
}

function nodeProblemConverter(msg) {
	if (msg) return "red";
	return null;
}

function nodeProblem(color){
	return color;
}

function addNode(arrayNode, key, name){
	var insert = searchNode(arrayNode, key);
	alert( name );
	if( insert == true ){
		alert(1);
	}
	arrayNode.push({key: key, name: name, source: "images/switch.png", loc: "380 250", color: "pink"});
}

function addLink(diagram, hostA, hostB){
	diagram.model.addLinkData({ from: hostA, to: hostB });
}

function searchNode(arrayNode, key)
{
	for(var i = 0; i < arrayNode.lenght; i++)
	{
		if(arrayNode[i]['key'] == key)
			return true;
	}
	return false;
}

  function showPoint(loc) {
    var docloc = myDiagram.transformDocToView(loc);
	var elt = document.getElementById("Message1");
    elt.textContent = "document: " + loc.x.toFixed(2) + " " + loc.y.toFixed(2) +
                      "  view: " + docloc.x.toFixed(2) + " " + docloc.y.toFixed(2);
  }
