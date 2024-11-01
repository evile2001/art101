// Author: Emma Faszer <efaszer@ucsc.edu>
// Date: 31 October 2024

function multiplyByTwo(x){
    return x*2;
}

numbers.map(multiplyByTwo);

numbers.map(function(x){
    return x ** 0.5;
})

mapResults = numbers.map(multiplyByTwo);
console.log("Results: ", mapResults);