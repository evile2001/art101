/*
* Author: Emma Faszer <efaszer@ucsc.edu>
* Created: 28 October 2024
*/

function sortUserName () {
var userName = window.prompt ("Hi, please tell me your name so I can fix it.");
console.log ("userName =", userName);

// turn string into array
var nameArray = userName.split ('');
console.log ("nameArray =", nameArray);

// sort array
var nameArraySort = nameArray.sort ();
console.log ("nameArraySort =", nameArraySort);

// array back to string
var nameSorted = nameArraySort.join ('');
console.log ("nameSorted =", nameSorted);

return "Your sorted name is: " + nameSorted;
}

function displaySortedName () {
let result = sortUserName ();
document.getElementById("output").innerHTML = `<p>I fixed your name: <strong>${result}</strong></p>`;
}

window.onload = displaySortedName;








console.log("Emma is smart");