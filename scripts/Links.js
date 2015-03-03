function Links(){
	var links = new Array();
	
	this.getLinks = function ()
	{
		return links;
	}
	
	this.addLink(dest)
	{
		links[links.length] = dest;
	}
	
	this.removeLink = function (id)
	{
		links.splice(searchLink(id), 1);
	}
	
	this.searchLink = function (id)
	{
		return links.indexOf(id);
	}
}