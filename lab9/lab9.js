// Author: Emma faszer <efaszer@ucsc.edu>
// Date: 2 November 2024


// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a listener to the challenge button
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});