// // Variables:
// var apiKey = "4738d0dbcb3fddef6ba96e2cc06440c8";
// var forecastApiKey = "8c89df0081167dd83fa09a469d91bb54";
// var currentDate = moment().format("M/D/YYYY");
// var savedSearchHistory = JSON.parse(localStorage.getItem("history")) || [];

// // Functions:
// // Function for the current weather to display
// function currentWeather(city) {
//     var apiURLCurrent =  "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
//     fetch(apiURLCurrent)
//         .then(function(response) {
//             if (response.ok) {
//                 response.json().then(function(response) {
//                 var iconCode = response.weather[0].icon;
//                 var iconURL = "https://openweathermap.org/img/wn/" + iconCode + ".png";
//                 var cityDate = response.name + " (" + currentDate + ") ";
//                 var cityDateIconHTML = '<p class="h3 my-4 city-name" id="cityDateIcon">' + cityDate + '<img id="weatherIcon" src="' + iconURL+ '"/>'; 
//                     $('#cityDateIcon').remove();
//                     $("#currentWeatherContainer").prepend(cityDateIconHTML);
//                 var currentTemp = response.main.temp + "°F";
//                     $("#currentTemp").text(currentTemp);
//                 var currentHMD = response.main.humidity + "%";
//                     $("#currentHMD").text(currentHMD);
//                 var windSpeed = response.wind.speed + " MPH";
//                     $("#windSpeed").text(windSpeed);
//                 fetch("https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + apiKey)
//                 .then(function(response) {
//                     return response.json();
//                 })
//                 .then(function(response) {
//                     var uvIndex = response.value
//                     if (uvIndex < 3) {
//                         $("#uvIndex")
//                         .removeClass()
//                         .addClass("favorable")
//                     } else if (uvIndex < 7) {
//                         $("#uvIndex")
//                         .removeClass()
//                         .addClass("moderate") 
//                     } else if (uvIndex >= 7) {
//                         $("#uvIndex")
//                         .removeClass()
//                         .addClass("severe")
//                     } 
//                     $("#uvIndex").text(uvIndex) 
//                 });
//             });
//             } else {
//                 alert("Error: " + response.statusText);
//             }
//         })
//         .catch(function(error) {
//             alert("Unable to connect to Weather Report");
//         });
// };

// Event Listeners:
// Listens for input to be submitted and runs weather functions
$("#citySearchForm").on("submit", function(event) {
    event.preventDefault();
    var searchedCity = $("#cityName").val();
    currentWeather(searchedCity);
    forecast(searchedCity);
    searchHistory(searchedCity);
    $("#searchHistory").siblings().removeClass("active");
    $("#cityName").val('');
});