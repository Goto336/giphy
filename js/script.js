// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"

$("#search-button").click(function(){
    
    var searchTerm = $("#search-term").val();
    
    var api_url = "https://api.giphy.com/v1/gifs/search?q="+searchTerm+"&rating=pg&api_key=dc6zaTOxFJmzC"

    
   $.ajax({
        url: api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            $(".container--results").html('');
            
            response.data.forEach(function(item){
               $(".container--results").append(
            '<img width="150px" src="' + item.images.original.url + '">'
            );  
            })
        }   
    }); 
  
});

