

var parameter

parameter = "hello"

$.ajax({
	url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ parameter +"&api-key=8b0772360db64b27ac3c06b5a91f7a19",
	method: "GET"

}).done(function(response) {

	console.log(response)

})