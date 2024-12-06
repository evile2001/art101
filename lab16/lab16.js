// Author: Emma Faszer
// Date: 3 December 2024

var URL = "https://xkcd.com/info.0.json";
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

function make_safe(str) {
    return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
    if (typeof num === 'undefined') {
        numStr = "";
    } else {
        numStr = num.toString() + "/";
    }
    var ourURL = URLpre + numStr + URLpost;
    console.log("Our new URL:", ourURL);

    // Replaced $.ajax with fetch
   fetch(ourURL)
       .then(response => response.json())
       .then(data => {              
           var imageUrl = data.img;
           var title = data.title;
           console.log("orig title:", title);
           title = make_safe(title);
           console.log("safe title:", title);
          var alt= data.alt;
          console.log("orig alt:", alt);
          alt= make_safe(alt); 
                  console.log("safe alt:", alt); 
                  // Add a div with id='output' in your HTML.
                    $("#output").html(`<div id="imageblock">
                      <h2>${title}</h2>
                      <img src="${imageUrl}" alt="${alt}"><br>
                      <button id="prev">Previous</button><button id="next">Next</button>
                    </div>`);
                    $("#prev").click(function(){
                        getComic(num - 1);
                    });
                $("#next").click(function(){
                getComic(num + 1);
                });
            })
        .catch(() => alert('Error!'));
}
getComic();