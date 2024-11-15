// Author: Emma Faszer
// Date: 14 November 2024


function sortingHat(str) {
    let len = str.length;
    let mod = len % 4;
    if (mod === 0) {
        return "Paul"
    }
    else if (mod === 1) {
        return "John"
    }
    else if (mod === 2) {
        return "George"
    }
    else if (mod === 3) {
        return "Ringo :("
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name= document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>Your man is: " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})