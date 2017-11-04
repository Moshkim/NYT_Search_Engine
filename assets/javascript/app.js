

var parameter




$('#searchButton').on('click', function(event){
	event.preventDefault()

	var searchTerm = $('#usrTerm').val()
	var numOfRetrieve = $('#sel1').val()
	var beginYear = $('#beginYear').val()
	var endYear = $('#endYear').val()

	$.ajax({
		url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&api-key=8b0772360db64b27ac3c06b5a91f7a19",
		method: "GET"

	}).done(function(data) {

		console.log(data)
		var yearsOfArray = []


		for(var i = beginYear; i <= endYear; i++){
			yearsOfArray.push(i)
		}

		for(var i = 0; i < numOfRetrieve; i++){

			var author
			var title
			var index
			var publishedData = data.response.docs[i].pub_date


			if(data.response.docs[i].byline === undefined){
				//var author = data.response.docs[i].byline.original
				title = data.response.docs[i].headline.main
				index = i+1

				var div = $('<div>').append($('<h2>').text(index + " " + title)).addClass('news')

				div.append($('<h3>').text("No Author"))

				$('#result').append(div)
			} else {
				author = data.response.docs[i].byline.original
				title = data.response.docs[i].headline.main
				index = i+1
				var div = $('<div>').append($('<h2>').text(index + " " + title)).addClass('news')

				div.append($('<h3>').text(author))

				$('#result').append(div)
			}

		}

	})


})


