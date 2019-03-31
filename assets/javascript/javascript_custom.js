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
        console.log(listItem);
        listItem.html("<a>" + item.strIngredient1 + "</a>");
        listItem.attr("id", "ingredMenu");
        listItem.attr("class", "ingred");
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
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    // ----- Render Ingredient Button Section 

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
             // Adding a data-attribute
             a.attr("id", "ingredButton");
            // Providing the initial button text
            a.text(ingredients[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

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
   
    function removeButtons(){
        $(this).remove();

        var indexValue = $(this).attr("data-name");
        var index = ingredients.indexOf(indexValue);
     
        if (index > -1) {
           ingredients.splice(index, 1);
        }
    };

    $(document).on("click", "#ingredButton", removeButtons);

});







