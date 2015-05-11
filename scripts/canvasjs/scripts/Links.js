/*
 * Classe guarda os links de um equipamento
 *
 */


function Links(){
	var links;

	this.init = function ()
	{
		this.links = new Array();
		this.test();
	}
	
	this.getLinks = function ()
	{
		return this.links;
	}
	
	this.addLink = function(dest)
	{
		this.links[this.links.length] = dest;
	}
	
	this.removeLink = function (link)
	{
		var index = this.searchLink(link);
		if( index != -1){
			this.links.splice(index, 1);}
	}
	
	this.searchLink = function (id)
	{
		return this.links.indexOf(id);
	}

	this.test = function()
	{
		
		this.addLink(1);
		this.addLink(5);
		this.addLink(10);
		this.removeLink(5);
		$("#message").html(this.searchLink(10) );
	}
}
