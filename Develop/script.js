// Assignment code here


//Password Length Function 
var passwordNumber = function() { 
  passwordNumberTotal = window.prompt("Please enter the length of password you want to create between 8 and 128 characters")


    //validate that the password length is between 8 and 

        if (passwordNumberTotal > 7 && passwordNumberTotal < 129) {
          alert ("You have chosen a password of " + passwordNumberTotal + "!" )
        }

        else {
          passwordNumber();
        }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
