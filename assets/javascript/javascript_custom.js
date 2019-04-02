$(document).ready(function () {


    var ingredients = [];
    var selectedIngredients = ingredients;
    var selectedDrinkId = "";
    var APIKey = "8673533";
    var drinkNameForGiphy = "";
    var savedDrinkList = [];

    $("#saved-drinks").hide();

    $("#submit").on("click", function () {
        $("#drink-output").empty();

        // Here we are building the URL we need to query the database


  var queryURL = "https://www.thecocktaildb.com/api/json/V2/" + APIKey + "/filter.php?i=" + selectedIngredients;
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
      url: queryURL,
      method: "GET"
  })
      // We store all of the retrieved data inside of an object called "response"
      .then(function (response) {
          // Log the queryURL
          console.log(queryURL);
          // Log the resulting object
          console.log(response);
          //console.log(response.drinks[0]);
          var results = response.drinks;
          for (var i = 0; i < results.length; i++) {
              // Creating and storing a div tag
              var drinkThumbnailDiv = $("<div>");
              drinkThumbnailDiv.addClass("card");
              // Creating an h3 tag with the result item's name
              var h3 = $("<h3>").text(results[i].strDrink);
              h3.addClass("text-center");
              // Creating and storing an image tag
              var drinkThumbnailImage = $("<img>");
              drinkThumbnailImage.addClass("thumbnailImage");
              drinkThumbnailImage.attr("drinkID", results[i].idDrink);
              drinkThumbnailImage.attr("width", "100%");
              // Setting the src attribute of the image to a property pulled off the result item
              drinkThumbnailImage.attr("src", results[i].strDrinkThumb);
              console.log(drinkThumbnailImage);
              // Appending the paragraph and image tag to the emotionDiv
              drinkThumbnailDiv.append(h3);
              drinkThumbnailDiv.append(drinkThumbnailImage);
              // Prependng the emotionDiv to the HTML page in the "#gif-output" div
              $("#drink-output").append(drinkThumbnailDiv);
          }



          $(".thumbnailImage").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            //var state = $(this).attr("data-state");
            console.log("working");
      
            $("#exampleModal").modal("show");
      
            selectedDrinkId = $(this).attr("drinkID");
            console.log(selectedDrinkId);
      
            openDrinkInfo();
      
          });
      });
  });

  $("#save-cocktail-button").on("click", function() {
    console.log("clicked");
    event.preventDefault();
    savedDrinkList.push(selectedDrinkId);
    localStorage.setItem("drinkDiv", savedDrinkList);
    displaySavedDrinkList();
  });

      function displaySavedDrinkList() {
        $("#saved-drinks").show();
        for (var i = 0; i < savedDrinkList.length; i++) {
          var querySavedURL = "https://www.thecocktaildb.com/api/json/V2/" + APIKey + "/lookup.php?i=" + savedDrinkList[i];
        }
        console.log(savedDrinkList);
        $.ajax({
          url: querySavedURL,
          method: "GET"
      })

          // We store all of the retrieved data inside of an object called "response"
          .then(function (response) {
            var results = response.drinks;
            // Creating and storing a div tag
            for (var i = 0; i < results.length; i++) {
            var drinkThumbnailDiv = $("<div>");
            drinkThumbnailDiv.addClass("card");
            // Creating an h3 tag with the result item's name
            var h3 = $("<h3>").text(results[0].strDrink);
            h3.addClass("text-center");
            // Creating and storing an image tag
            var drinkThumbnailImage = $("<img>");
            drinkThumbnailImage.addClass("thumbnailImage");
            drinkThumbnailImage.attr("drinkID", results[0].idDrink);
            drinkThumbnailImage.attr("width", "100%");
            // Setting the src attribute of the image to a property pulled off the result item
            drinkThumbnailImage.attr("src", results[0].strDrinkThumb);
            console.log(drinkThumbnailImage);
            // Appending the paragraph and image tag to the emotionDiv
            drinkThumbnailDiv.append(h3);
            drinkThumbnailDiv.append(drinkThumbnailImage);
            // Prependng the emotionDiv to the HTML page in the "#gif-output" div
            $("#saved-drinks").append(drinkThumbnailDiv);
            }
          });
      }


      function openDrinkInfo() {
        console.log("clicked");
        var querySecondURL = "https://www.thecocktaildb.com/api/json/V2/" + APIKey + "/lookup.php?i=" + selectedDrinkId;
        $("#ModalLabel").empty();
        $("#imageDiv").empty();
        $("#ingredientsList").empty();
        $("#spotifyPlay").empty();
        $("#drinkInstructions").empty();
        $.ajax({
            url: querySecondURL,
            method: "GET"
        })

            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {
                // Log the queryURL
                console.log(querySecondURL);
                // Log the resulting object
                console.log(response);
                var results = response.drinks;

                var drinkModalDiv = $("<div>");
                drinkModalDiv.addClass("modal-body");

                var modalContent = $("<div>");
                modalContent.addClass("modal-content");

                var drinkInstructions = $("<div>");

                var drinkName = $("<h3>").text(results[0].strDrink);
                var glassType = $("<p>").text(results[0].strGlass);
                var instructions = $("<p>").text(results[0].strInstructions);
                var ingredients1 = $("<p>").text(results[0].strMeasure1 + " " + results[0].strIngredient1);
                var ingredients2 = $("<p>").text(results[0].strMeasure2 + " " + results[0].strIngredient2);
                var ingredients3 = $("<p>").text(results[0].strMeasure3 + " " + results[0].strIngredient3);
                var ingredients4 = $("<p>").text(results[0].strMeasure4 + " " + results[0].strIngredient4);
                var ingredients5 = $("<p>").text(results[0].strMeasure5 + " " + results[0].strIngredient5);
                var ingredients6 = $("<p>").text(results[0].strMeasure6 + " " + results[0].strIngredient6);
                var ingredients7 = $("<p>").text(results[0].strMeasure7 + " " + results[0].strIngredient7);
                var ingredients8 = $("<p>").text(results[0].strMeasure8 + " " + results[0].strIngredient8);
                var ingredients9 = $("<p>").text(results[0].strMeasure9 + " " + results[0].strIngredient9);
                var ingredients10 = $("<p>").text(results[0].strMeasure10 + " " + results[0].strIngredient10);

                var drinkModalImage = $("<img>");
                drinkModalImage.attr("src", results[0].strDrinkThumb);
                drinkModalImage.attr("width", "100%");

                var textGlass = $("<h3>");
                textGlass.html("Drink Glass:");
                modalContent.append(textGlass);
                modalContent.append(glassType);
                var textRecipe = $("<h3>");
                textRecipe.html("Drink Recipe:");
                modalContent.append(textRecipe);
                modalContent.append(ingredients1);
                modalContent.append(ingredients2);
                modalContent.append(ingredients3);
                modalContent.append(ingredients4);
                modalContent.append(ingredients5);
                modalContent.append(ingredients6);
                modalContent.append(ingredients7);
                modalContent.append(ingredients8);
                modalContent.append(ingredients9);
                modalContent.append(ingredients10);
        

                //modalContent.append(drinkModalImage);
                drinkInstructions.append(instructions);
                //The header for the modal
                $("#ModalLabel").append(drinkName);
                //Appending the image to the image div section of the modal
                $("#imageDiv").append(drinkModalImage);
                //Appending the ingredients list (glass type and indredients and their respective quantities)
                $("#ingredientsList").append(modalContent);
                //appending the drink instructions to the respective section div of the modal
                var instructionText = $("<h3>");
                instructionText.html("Drink Instructions:");
                $("#drinkInstructions").append(instructionText);
                $("#drinkInstructions").append(drinkInstructions);


                //drinkGiphy();


                // Section to add dynamically add spotify url to modal
                console.log(results[0].strIngredient1);
                console.log(results[0].strIngredient2);
                console.log(results[0].strIngredient3);
                console.log(results[0].strIngredient4);
                console.log(results[0].strIngredient5);


                switch (results[0].strIngredient1.trim()) {
                    case ("Bourbon"):
                    case ("Blended whiskey"):
                    case ("Rye whisky"):
                    case ("Whiskey"):
                    case ("Whisky"):
                    case ("151 proof rum"):
                        console.log("country music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX6P1Nsk3wSZX");
                        break;
                    case ("Absolut Vodka"):
                    case ("Vodka"):
                        console.log("russian music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/6d3Zwzras2ghumJvnlIqsI");
                        break;
                    case ("Coconut rum"):
                    case ("Light rum"):
                    case ("Malibu rum"):
                    case ("Rum"):
                    case ("Spiced rum"):
                    case ("White Rum"):
                        console.log("reggae music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXbSbnqxMTGx9");
                        break;
                    case ("Tequila"):
                    case ("Mezcal"):
                    case ("Dark rum"):
                    case ("Añejo rum"):
                        console.log("latin music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX6ThddIjWuGT");
                        break;
                    case ("Gin"):
                    case ("Blended Scotch"):
                    case ("Scotch"):
                    case ("Champagne"):
                    case ("Cognac"):
                        console.log("jazz music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4wta20PHgwo");
                        break;
                    case ("Apple brandy"):
                    case ("Apricot brandy"):
                    case ("Blackberry brandy"):
                    case ("Brandy"):
                    case ("Cherry brandy"):
                    case ("Cranberry vodka"):
                    case ("Lemon vodka"):
                    case ("Peach vodka"):
                    case ("Raspberry vodka"):
                    case ("Vanilla vodka"):
                    case ("Absolut Citron"):
                    case ("Absolut Kurant"):
                    case ("Amaretto"):
                    case ("Bacardi Limon"):
                    case ("Blue Curacao"):
                        console.log("80's music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4UtSsGT1Sbe");
                        break;
                    case ("Cachaca"):
                        console.log("samba music");
                        $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/22sifzjxojdf7narj6o6fszmq/playlist/5xur4LYdlOdcxWAWxfr9Mi");
                        break;
                    default:
                        console.log("1st round no match");
                        secondIteration();
                };

                function secondIteration() {
                    switch (results[0].strIngredient2) {
                        case ("Bourbon"):
                        case ("Blended whiskey"):
                        case ("Rye whisky"):
                        case ("Whiskey"):
                        case ("Whisky"):
                        case ("151 proof rum"):
                            console.log("country music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX6P1Nsk3wSZX");
                            break;
                        case ("Absolut Vodka"):
                        case ("Vodka"):
                            console.log("russian music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/6d3Zwzras2ghumJvnlIqsI");
                            break;
                        case ("Coconut rum"):
                        case ("Light rum"):
                        case ("Malibu rum"):
                        case ("Rum"):
                        case ("Spiced rum"):
                        case ("White Rum"):
                            console.log("reggae music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXbSbnqxMTGx9");
                            break;
                        case ("Tequila"):
                        case ("Mezcal"):
                        case ("Dark rum"):
                        case ("Añejo rum"):
                            console.log("latin music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX6ThddIjWuGT");
                            break;
                        case ("Gin"):
                        case ("Blended Scotch"):
                        case ("Scotch"):
                        case ("Champagne"):
                        case ("Cognac"):
                            console.log("jazz music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4wta20PHgwo");
                            break;
                        case ("Apple brandy"):
                        case ("Apricot brandy"):
                        case ("Blackberry brandy"):
                        case ("Brandy"):
                        case ("Cherry brandy"):
                        case ("Cranberry vodka"):
                        case ("Lemon vodka"):
                        case ("Peach vodka"):
                        case ("Raspberry vodka"):
                        case ("Vanilla vodka"):
                        case ("Absolut Citron"):
                        case ("Absolut Kurant"):
                        case ("Amaretto"):
                        case ("Bacardi Limon"):
                        case ("Blue Curacao"):
                            console.log("80's music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4UtSsGT1Sbe");
                            break;
                        case ("Cachaca"):
                            console.log("samba music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/22sifzjxojdf7narj6o6fszmq/playlist/5xur4LYdlOdcxWAWxfr9Mi");
                            break;
                        default:
                            console.log("2nd round no match");
                            thirdIteration();
                    };

                };

                function thirdIteration() {
                    switch (results[0].strIngredient3) {
                        case ("Bourbon"):
                        case ("Blended whiskey"):
                        case ("Rye whisky"):
                        case ("Whiskey"):
                        case ("Whisky"):
                        case ("151 proof rum"):
                            console.log("country music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX6P1Nsk3wSZX");
                            break;
                        case ("Absolut Vodka"):
                        case ("Vodka"):
                            console.log("russian music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/6d3Zwzras2ghumJvnlIqsI");
                            break;
                        case ("Coconut rum"):
                        case ("Light rum"):
                        case ("Malibu rum"):
                        case ("Rum"):
                        case ("Spiced rum"):
                        case ("White Rum"):
                            console.log("reggae music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXbSbnqxMTGx9");
                            break;
                        case ("Tequila"):
                        case ("Mezcal"):
                        case ("Dark rum"):
                        case ("Añejo rum"):
                            console.log("latin music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX6ThddIjWuGT");
                            break;
                        case ("Gin"):
                        case ("Blended Scotch"):
                        case ("Scotch"):
                        case ("Champagne"):
                        case ("Cognac"):
                            console.log("jazz music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4wta20PHgwo");
                            break;
                        case ("Apple brandy"):
                        case ("Apricot brandy"):
                        case ("Blackberry brandy"):
                        case ("Brandy"):
                        case ("Cherry brandy"):
                        case ("Cranberry vodka"):
                        case ("Lemon vodka"):
                        case ("Peach vodka"):
                        case ("Raspberry vodka"):
                        case ("Vanilla vodka"):
                        case ("Absolut Citron"):
                        case ("Absolut Kurant"):
                        case ("Amaretto"):
                        case ("Bacardi Limon"):
                        case ("Blue Curacao"):
                            console.log("80's music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4UtSsGT1Sbe");
                            break;
                        case ("Cachaca"):
                            console.log("samba music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/22sifzjxojdf7narj6o6fszmq/playlist/5xur4LYdlOdcxWAWxfr9Mi");
                            break;
                        default:
                            console.log("3rd round no match");
                            console.log("throwback music");
                            $('#spotifyPlay').attr("src", "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX8ky12eWIvcW");
                    };

                };


                // Drink GIF section 
                function drinkGiphy() {

                    $("#drink-giphy").empty();
        
                    var topic = results[0].strDrink;
                    console.log(topic);
        
                    var queryGiphyURL = "https://api.giphy.com/v1/gifs/search?api_key=R9u5VRTU7cYZI9IK69QVVKAHL3j5Fj0O&q=" + topic + "&limit=1&offset=0&lang=en";

                    var encodedGiphyURL = encodeURI(queryGiphyURL);
                    console.log(topic);
                    console.log(queryGiphyURL);
                    $.ajax({
                        url: encodedGiphyURL,
                        method: "GET"
                    })
                    .then(function (response) {
        
                        //store the reponse data in a variable
                        var results = response.data;
        
                        // console.log test
                        console.log(results);
        
                        // new storage area for the drink Giphy
                        var drinkGiphyDiv = $("<div>");
        
                        // create and store the giphy
                        var drinkTopic = $("<img>");
                        drinkTopic.attr("src", results[0].images.fixed_width.url);
        
                        // append to the new div
                        drinkGiphyDiv.append(drinkTopic);
        
                        $("#drink-giphy").append(drinkGiphyDiv);
                        console.log("fuck you");
                    });
                                          
                };
                drinkGiphy();

                function wikiDrinkSearch () {

                    $("#drink-wiki").empty();

                    var searchTopic = results[0].strDrink  //drinkNameForGiphy;
                    var wikiSearchURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=" + searchTopic;
                    var encodedWikiURL = encodeURI(wikiSearchURL);
                    // console.log(searchTopic);
                    console.log(searchTopic);
                    console.log(encodedWikiURL);

                    $.ajax({
                    url: encodedWikiURL,
                    method: "GET"
                    }).then(function(response) {

                        //store the repsonse data in a variable called results
                        var results = response;

                        //console.log test
                        console.log(results);

                        // new storage area for wiki snippet
                        var drinkWikiDiv = $("<div>");

                        //create and store the wiki snippet
                        var drinkSnippet = $("<p>");
                        drinkSnippet.html(results.query.search[0].snippet);

                        //append the wiki snippet
                        drinkWikiDiv.append(drinkSnippet);

                        $("#drink-wiki").append(drinkWikiDiv);

                    });
                }
                wikiDrinkSearch();



            });

};





    // ------ Add ingredients to search menu section /

var dataJSON = '[{"strIngredient1": "Light rum"}, { "strIngredient1": "Applejack" }, { "strIngredient1": "Gin" }, { "strIngredient1": "Dark rum" }, { "strIngredient1": "Sweet Vermouth" }, { "strIngredient1": "Strawberry schnapps" }, { "strIngredient1": "Scotch" }, { "strIngredient1": "Apricot brandy" }, { "strIngredient1": "Triple sec" }, { "strIngredient1": "Southern Comfort" }, { "strIngredient1": "Orange bitters" }, { "strIngredient1": "Brandy" }, { "strIngredient1": "Lemon vodka" }, { "strIngredient1": "Blended whiskey" }, { "strIngredient1": "Dry Vermouth" }, { "strIngredient1": "Amaretto" }, { "strIngredient1": "Tea" }, { "strIngredient1": "Champagne" }, { "strIngredient1": "Coffee liqueur" }, { "strIngredient1": "Bourbon" }, { "strIngredient1": "Tequila" }, { "strIngredient1": "Vodka" }, { "strIngredient1": "Añejo rum" }, { "strIngredient1": "Bitters" }, { "strIngredient1": "Sugar" }, { "strIngredient1": "Kahlua" }, { "strIngredient1": "demerara Sugar" }, { "strIngredient1": "Dubonnet Rouge" }, { "strIngredient1": "Lime juice" }, { "strIngredient1": "Irish whiskey" }, { "strIngredient1": "Apple brandy" }, { "strIngredient1": "Carbonated water" }, { "strIngredient1": "Cherry brandy" }, { "strIngredient1": "Creme de Cacao" }, { "strIngredient1": "Grenadine" }, { "strIngredient1": "Port" }, { "strIngredient1": "Coffee brandy" }, { "strIngredient1": "Red wine" }, { "strIngredient1": "Rum" }, { "strIngredient1": "Grapefruit juice" }, { "strIngredient1": "Ricard" }, { "strIngredient1": "Sherry" }, { "strIngredient1": "Cognac" }, { "strIngredient1": "Sloe gin" }, { "strIngredient1": "Apple juice" }, { "strIngredient1": "Pineapple juice" }, { "strIngredient1": "Lemon juice" }, { "strIngredient1": "Sugar syrup" }, { "strIngredient1": "Milk" }, { "strIngredient1": "Strawberries" }, { "strIngredient1": "Chocolate syrup" }, { "strIngredient1": "Yoghurt" }, { "strIngredient1": "Mango" }, { "strIngredient1": "Ginger" }, { "strIngredient1": "Lime" }, { "strIngredient1": "Cantaloupe" }, { "strIngredient1": "Berries" }, { "strIngredient1": "Grapes" }, { "strIngredient1": "Kiwi" }, { "strIngredient1": "Tomato juice" }, { "strIngredient1": "Cocoa powder" }, { "strIngredient1": "Chocolate" }, { "strIngredient1": "Heavy cream" }, { "strIngredient1": "Galliano" }, { "strIngredient1": "Peach Vodka" }, { "strIngredient1": "Ouzo" }, { "strIngredient1": "Coffee" }, { "strIngredient1": "Spiced rum" }, { "strIngredient1": "Water" }, { "strIngredient1": "Espresso" }, { "strIngredient1": "Angelica root" }, { "strIngredient1": "Orange" }, { "strIngredient1": "Cranberries" }, { "strIngredient1": "Johnnie Walker" }, { "strIngredient1": "Apple cider" }, { "strIngredient1": "Everclear" }, { "strIngredient1": "Cranberry juice" }, { "strIngredient1": "Egg yolk" }, { "strIngredient1": "Egg" }, { "strIngredient1": "Grape juice" }, { "strIngredient1": "Peach nectar" }, { "strIngredient1": "Lemon" }, { "strIngredient1": "Firewater" }, { "strIngredient1": "Lemonade" }, { "strIngredient1": "Lager" }, { "strIngredient1": "Whiskey" }, { "strIngredient1": "Absolut Citron" }, { "strIngredient1": "Pisco" }, { "strIngredient1": "Irish cream" }, { "strIngredient1": "Ale" }, { "strIngredient1": "Chocolate liqueur" }, { "strIngredient1": "Midori melon liqueur" }, { "strIngredient1": "Sambuca" }, { "strIngredient1": "Cider" }, { "strIngredient1": "Sprite" }, { "strIngredient1": "7-Up" }, { "strIngredient1": "Blackberry brandy" }, { "strIngredient1": "Peppermint schnapps" }, { "strIngredient1": "Creme de Cassis" }, { "strIngredient1": "Jack Daniels" }, { "strIngredient1": "Baileys irish cream" }, { "strIngredient1": "151 proof rum" }, { "strIngredient1": "Absolut Vodka" }, { "strIngredient1": "Goldschlager" }, { "strIngredient1": "Crown Royal" }, { "strIngredient1": "Cointreau" }, { "strIngredient1": "Vermouth" }, { "strIngredient1": "Advocaat" }, { "strIngredient1": "Absolut Kurant" }, { "strIngredient1": "Beer" }, { "strIngredient1": "Kool-Aid" }, { "strIngredient1": "Cherry Heering" }, { "strIngredient1": "White Creme de Menthe" }, { "strIngredient1": "Malibu rum" }, { "strIngredient1": "Vanilla vodka" }, { "strIngredient1": "Jägermeister" }, { "strIngredient1": "Kiwi liqueur" }, { "strIngredient1": "Grand Marnier" }, { "strIngredient1": "Cachaca" }, { "strIngredient1": "Peachtree schnapps" }, { "strIngredient1": "Wild Turkey" }, { "strIngredient1": "Cranberry vodka" }, { "strIngredient1": "Corona" }, { "strIngredient1": "Orange juice" }, { "strIngredient1": "Yukon Jack" }, { "strIngredient1": "Chocolate ice-cream" }, { "strIngredient1": "Coconut rum" }, { "strIngredient1": "Banana liqueur" }, { "strIngredient1": "Black Sambuca" }, { "strIngredient1": "Hot Damn" }, { "strIngredient1": "Mint" }, { "strIngredient1": "Campari" }, { "strIngredient1": "Ice" }, { "strIngredient1": "Sour mix" }, { "strIngredient1": "Absinthe" }, { "strIngredient1": "Whisky" }, { "strIngredient1": "Guinness stout" }, { "strIngredient1": "Vanilla ice-cream" }, { "strIngredient1": "Chambord raspberry liqueur" }, { "strIngredient1": "Jim Beam" }, { "strIngredient1": "Godiva liqueur" }, { "strIngredient1": "Fruit punch" }, { "strIngredient1": "Baileys irish cream" }, { "strIngredient1": "Zima" }, { "strIngredient1": "Blue Curacao" }, { "strIngredient1": "Coca-Cola" }, { "strIngredient1": "Maui" }, { "strIngredient1": "Frangelico" }, { "strIngredient1": "Bacardi Limon" }, { "strIngredient1": "Raspberry vodka" }, { "strIngredient1": "Green Creme de Menthe" }, { "strIngredient1": "Lemon peel" }, { "strIngredient1": "Prosecco" }, { "strIngredient1": "White Rum" }, { "strIngredient1": "Mezcal" }, { "strIngredient1": "Green Chartreuse" }, { "strIngredient1": "Grape Soda" }, { "strIngredient1": "Hot Chocolate" }, { "strIngredient1": "Blended Scotch" }, { "strIngredient1": "Rye whiskey"}]';

var dataObject = JSON.parse(dataJSON);

function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

dataObject.sort(function (a, b) {
    return compareStrings(a.strIngredient1, b.strIngredient1);
})


var listItemString = $('#ingredList').html();

dataObject.forEach(buildNewList);


    function buildNewList(item, _index) {
        var listItem = $("<li>" + listItemString + "</li>");
        listItem.html("<a>" + item.strIngredient1 + "</a>");
        listItem.attr("id", "ingredMenu");
        listItem.attr("class", "ingred");
        listItem.attr("style", "display: none");
        $('#ingredMenu').append(listItem);
    }



//  ----- Search Menu Section 

$("#mySearch").on("keyup", searchFunction);


function searchFunction() {


    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ingredMenu");
    li = ul.getElementsByTagName("li");

    console.log(li);

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

// ----- Render Ingredient Button Section 


function renderButtons() {

    // this is necessary otherwise you will have repeat buttons
    $("#buttons-view").empty();

    // Looping through the array of ingredients
    for (var i = 0; i < ingredients.length; i++) {

        // Then dynamicaly generating buttons for each ingredient in the array
        var a = $("<button>");
        // Adding a data-attribute
        a.attr("data-name", ingredients[i]);
        // Adding a data-attribute
        a.attr("id", "ingredButton");
        a.addClass("btn btn-primary");
        // Providing the initial button text
        a.text(ingredients[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    };
};

// This function handles events where an ingredient button is clicked
$(".ingred").on("click", function (event) {

    event.preventDefault();

    // This line grabs the value from the clicked ingredient
    var ingredient = $(this).text();

    // Adding ingredient from the textbox to our array
    ingredients.push(ingredient);

    // Calling renderButtons which handles the processing of our ingredients array
    renderButtons();
});


// ----- Remove Ingredient Button Section

function removeButtons() {
    $(this).remove();

    var indexValue = $(this).attr("data-name");
    var index = ingredients.indexOf(indexValue);

    if (index > -1) {
        ingredients.splice(index, 1);
    };
};

$(document).on("click", "#ingredButton", removeButtons);

});







