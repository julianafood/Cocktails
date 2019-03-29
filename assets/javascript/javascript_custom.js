$(document).ready(function () {

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

  
    //  ----- Search Menu Section 

    $("#mySearch").on("keyup", searchFunction);

    function searchFunction() {
        // Declare variables
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    // Function for displaying selected ingredients
    var ingredients = [];

    function renderButtons() {

        // this is necessary otherwise you will have repeat buttons
        $("#buttons-view").empty();

        // Looping through the array of ingredients
        for (var i = 0; i < ingredients.length; i++) {

            // Then dynamicaly generating buttons for each ingredient in the array
            var a = $("<button>");
            // Adding a data-attribute
            a.attr("data-name", ingredients[i]);
            // Providing the initial button text
            a.text(ingredients[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

    // This function handles events where an ingredient button is clicked
    $(".ingred").on("click", function(event) {

        event.preventDefault();

        // This line grabs the value from the clicked ingredient
        var ingredient = $(this).val();

        // Adding ingredient from the textbox to our array
        ingredients.push(ingredient);

        // Calling renderButtons which handles the processing of our ingredients array
        renderButtons();
    });

});





