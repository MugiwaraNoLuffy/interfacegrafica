/*
 * Classe guarda os links de um equipamento
 *
 */

function Links(){
	var links;
	
	
	this.init = function ()
	{
		this.links = new Array();
	}
	
	this.getLinks = function ()
	{
		return this.links;
	}
	
	this.addLink(dest)
	{
		this.links[this.links.length] = dest;
	}
	
	this.removeLink = function (id)
	{
		this.links.splice(searchLink(id), 1);
	}
	
	this.searchLink = function (id)
	{
		return this.links.indexOf(id);
	}
	module.export = Links;
	export.init = this.init;
}
