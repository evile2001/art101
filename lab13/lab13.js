// Author: Emma Faszer
// Date: 18 November 2024


function processInput () {
    const inputNumber = parseInt(document.getElementById("numberInput").value);

    if (isNaN(inputNumber) || inputNumber<= 0) {
    alert("Enter a positive number");
    return;
}

$("#output").html("");

for (let num = 1; num <= inputNumber; num++) {
    let str = "";
    let className = "";

    if (num % 3 === 0) {
        str += "Fizz";
        className += "fizz";
    }
    if (num % 5 === 0) {
        str += "Buzz";
        className += "buzz";
    }
    if (num % 7 === 0) {
        str += "Boom";
        className += "boom";
    }
    if (str === "") {
        str - num;
    }
    $("#output").append(`<p class="${className.trim()}">${str}</p>`);
}}