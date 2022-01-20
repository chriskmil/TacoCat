//Get the string from the page
//controller function
function getValue() {
    document.getElementById("alert").classList.add("d-none");
    let userString = document.getElementById("userString").value;
    let returnObj = checkForPalindrome(userString);


    displayData(returnObj);
}


//Reverse the String
//logic function
function checkForPalindrome(userString) {

    userString = userString.toLowerCase();
    isPalindrome = false;
    let returnObj = {};




    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
    }

    if (revString !== userString) {
        isPalindrome = false;

    } else {
        isPalindrome = true
    }

    returnObj["IsPalindrome"] = isPalindrome;
    returnObj["revString"] = revString;

    return returnObj;

}

//Display the reversed string to the user
//View Function
function displayData(returnObj) {

    document.getElementById("alert").classList.remove("alert-success")
    document.getElementById("alert").classList.remove("alert-danger")


    if (returnObj["IsPalindrome"] == true) {
        document.getElementById("alert").classList.add("alert-success")
        document.getElementById("alertHeader").innerHTML = "Well Done!"
        document.getElementById("msg").innerHTML = `Your phrase is a palindrome<br>Your reversed string is:${returnObj["revString"]}`;
    } else {
        document.getElementById("alert").classList.add("alert-danger")
        document.getElementById("alertHeader").innerHTML = "Oh No!"
        document.getElementById("msg").innerHTML = `Your phrase is NOT palindrome<br>Your reversed string is:${returnObj["revString"]}`;
    }
    document.getElementById("alert").classList.remove("d-none");

}