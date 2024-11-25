// Author: Emma Faszer
// Date: 25 November 2024


$(document).ready(function() {
    $('#button').click(function() {
        var name = $('#nameInput').val();
        var url = "https://api.agify.io/?name=" + encodeURIComponent(name);

        $.ajax({
            url: url,
            type: "GET",
        })
        .done(function(data) {
            console.log(data); // Log data to console
            var printableData = "Name: " + data.name + "<br>Age: " + data.age;
            $("#output").html(printableData);
        });
    });
});