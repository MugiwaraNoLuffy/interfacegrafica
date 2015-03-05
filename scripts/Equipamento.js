/*
 * Guarda informacoes sobre os Equipamentos
 *
 */

function Equipamento(){
	var link;
	var links;
	var id;
	var descr;
	var $id; 	// ponteiro para o objeto no html
	var posX = 0;
	var posY = 0;
	var typeID;
	
	this.init = function (pid, descr, type, htmlID) 
	{
		//this.links = require('./Links'); //import
		//this.links = new Links();
		//this.links.init();
		this.setDescr(descr);
		alert(1);
		this.id = pid;
		alert(1);
		this.setType(type);
//		setDraggable(htmlID);
	}

	this.setDraggable = function (htmlID)
	{
		$id = $("#"+htmlID);
		$id.draggable({});
	}

	this.setType = function ( type )
	{
		typeID = type;
	}
	
	this.getType = function ()
	{
		return typeID;
	}
	
	this.setDescr = function (param)
	{
		descr = param;
	}
	
	this.getDescr = function ()
	{
		return descr;
	}
	
	this.getId = function ()
	{
		return id;
	}
	
	this.setPosition = function (x, y)
	{
		posX = x;
		posY = y;
	}
	
	this.getPosition = function()
	{
		return [posX, posY];
	}
}
