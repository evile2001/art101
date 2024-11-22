// Author: Emma faszer <efaszer@ucsc.edu>
// Date: 2 November 2024


$("#challenge").append("<button id='button-challenge'>Make brat</button>");
$("#problems").append("<button id='button-problems'>Make brat</button>");
$("#reflection").append("<button id='button-reflection'>Make brat</button>");
$("#results").append("<button id='button-results'>Make brat</button>");

$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});
$("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});
$("#button-reflection").click(function() {
    $("#reflection").toggleClass("special");
});
$("#button-results").click(function() {
    $("#results").toggleClass("special");
});