// Author: Emma Faszer
// Date: 10 November 2024


function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$("#submit").click(function(){
    const userName = $("#user-name").val();
    console.log("The user clicked the button.");
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});