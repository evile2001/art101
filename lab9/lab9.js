// Author: Emma faszer <efaszer@ucsc.edu>
// Date: 2 November 2024


$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("button-challenge").click(function(){
    $("challenge").toggleClass("special");
});