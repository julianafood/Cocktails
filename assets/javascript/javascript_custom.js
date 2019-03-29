var selectedIngredients = ["Aperol"];
var APIKey = "8673533";
// Here we are building the URL we need to query the database
var queryURL = "https://www.thecocktaildb.com/api/json/V2/" + APIKey + "/filter.php?i=" + selectedIngredients;
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
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
        // Creating and storing an image tag
        var drinkThumbnailImage = $("<img>");
        drinkThumbnailImage.addClass("thumbnailImage");
        // Setting the src attribute of the image to a property pulled off the result item
        drinkThumbnailImage.attr("src", results[i].strDrinkThumb);
        console.log(drinkThumbnailImage);
        // Appending the paragraph and image tag to the emotionDiv
        drinkThumbnailDiv.append(h3);
        drinkThumbnailDiv.append(drinkThumbnailImage);
        // Prependng the emotionDiv to the HTML page in the "#gif-output" div
        $("#drink-output").append(drinkThumbnailDiv);
    }
    // // Transfer content to HTML
    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);
    // // Log the data in the console as well
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (F): " + response.main.temp);
  });
