//Get the string from the page
//controller function
function getValue() {
    document.getElementById("alert").classList.add("d-none");
    let userString = document.getElementById("userString").value;
    let isPalindrome = checkForPalindrome(userString);
    displayData(isPalindrome);
}


//Reverse the String
//logic function
function checkForPalindrome(userString) {

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
    }

    if (revString !== userString) {
        return false;
    }
    return true;

}

//Display the reversed string to the user
//View Function
function displayData(isPalindrome) {

    document.getElementById("alert").classList.remove("alert-success")
    document.getElementById("alert").classList.remove("alert-danger")


    if (isPalindrome == true) {
        document.getElementById("alert").classList.add("alert-success")
        document.getElementById("alertHeader").innerHTML = "Well Done!"
        document.getElementById("msg").innerHTML = `Your phrase is a palindrome`;
    } else {
        document.getElementById("alert").classList.add("alert-danger")
        document.getElementById("alertHeader").innerHTML = "Oh No!"
        document.getElementById("msg").innerHTML = `Your phrase is NOT palindrome`;
    }
    document.getElementById("alert").classList.remove("d-none");

}