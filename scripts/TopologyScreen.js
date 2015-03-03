function TopoLogyScreen()
{ 
	var canvas, ctx, $canvas, canvasOffset, offsetX, offsetY;//, image1, $house, $house2, bool;
	var 
	var equipamentos = new Array(); // add tipo
	
	this.init = function()
	{
		pcs = new Array();
		canvas=document.getElementById("canvas");
		ctx=canvas.getContext("2d");
		$canvas=$("#canvas");
		canvasOffset=$canvas.offset();
		offsetX=canvasOffset.left;
		offsetY=canvasOffset.top;
		configTopology();
		$canvas.droppable({
			drop: Drop,
		});
	}
	

	/* Ler XML - carregar equipamentos e links
	 * criar DIVS no html. Ex.: <div id="PC1"><img src=""></div>
	 * Posicionar equipamentos e links. Using moveTo(x, y);
	 * Verificar se ha novos equipamentos 
	 */
	this.configTopology = function()
	{
		
	}
/*		image1=new Image();
		image1.src ="http://rack.2.mshcdn.com/media/ZgkyMDEyLzEyLzA0LzA1L0hQUENJbWFnZU1hLjVxMi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/66a60e1e/3cc/HP-PC-Image-Mashable.jpg";
	
		pcs[pcs.length] = ["house", 0, 0];
		pcs[pcs.length] = ["house2", 0, 0];
	
		$house=$("#house");
		$house2=$("#house2");
	
		bool = false;
		$house.draggable({});
		$("#message").html('testefdfd fsafadsfas');
		$house2.draggable({});
		$("#message").html('');
		//---------------------------------------------------------
		
		// set the data payload
		$("#message").html('testefdfd fsafadsfas');
		$house.data("image",image1); // key-value pair
		$house2.data("image2",image1); // key-value pair

	
		$canvas.droppable({
		    drop:dragDrop,
		});
*/	
	this.Drop = function ( e,ui ){
	    var element=ui.draggable;
	    var data=element.data("url");
	    var x=parseInt(ui.offset.left-offsetX);
	    var y=parseInt(ui.offset.top-offsetY);
	    $("#message").html('Coordenadas: '+'(' + ui.position.left + ', '+ui.position.top+')');
	    //ctx.drawImage(id,x-1,y);
		alert($(event.target).attr("id"));
		// busca id em pcs
		// id = busca($(event.target).attr("id"));
		id = 0;
		pcs[id][1] = x;
		pcs[id][2] = y;
	    //var canvas=document.getElementById("canvas");
		alert('Coordenadas: '+'(' + pcs[0][1] + ', '+pcs[0][2]+')');
	}	

}	
