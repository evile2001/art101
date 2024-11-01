/*
    // Author: Emma Faszer <efaszer@ucsc.edu>
    // Date: 31 October 2024
*/

let numbers = ["1", "2", "3", "4", "5"];

let x = numbers;

function multiplyByTwo (x) {
    return x*2;
}

numbers.map(multiplyByTwo);

numbers.map(function(x){
    return x ** 0.5;
})

var mapResults = numbers.map(multiplyByTwo);
console.log("Results: ", mapResults);