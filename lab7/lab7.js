// Author: Emma Faszer <efaszer@ucsc.edu>
// Created: 28 October 2024

// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
    var userName = window.prompt("What's your name? I wanna do a little trick!");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

//output
document.writeln("Here's your new name: ",
    sortUserName(), "</br>");