$(document).ready(function () {


  function wikiDrinkSearch () {

    $("#drink-wiki").empty();

    var searchTopic = drinkNameForGiphy;
    var wikiSearchURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=" + searchTopic;
    var encodedWikiURL = encodeURI(wikiSearchURL);
    // console.log(searchTopic);
    console.log(wikiSearchURL);
    console.log(encodedWikiURL);

    $.ajax({
      url: encodedWikiURL,
      method: "GET"
    }).then(function(response) {

      //store the repsonse data in a variable called results
      var results = response.data;

      //console.log test
      console.log(results);

      // new storage area for wiki snippet
      var drinkWikiDiv = $("<div>");

      //create and store the wiki snippet
      var drinkSnippet = $("<p>");
      drinkSnippet.text(results[0].query.search.snippet);

      //append the wiki snippet
      drinkWikiDiv.append(drinkSinippet);

      $("#drink-wiki").append(drinkWikiDiv);

    });
  }

  wikiDrinkSearch();

});

