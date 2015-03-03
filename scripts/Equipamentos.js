/*
 * Guarda informacoes sobre os Equipamentos
 *
 */

function Equipamento(){
	var links = new Link();
	var id;
	var descr;
	var posX = 0;
	var posY = 0;
	
	this.init = function (pid, descr) 
	{
		setDescr(descr);
		id = pid;
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
