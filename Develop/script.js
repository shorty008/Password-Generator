
//Password Length Function 
var passwordNumberCriteria = function() { 
  passwordNumberCriteriaTotal = window.prompt("Please enter the length of password you want to create between 8 and 128 characters");


    //validate that the password length is between 8 and 

        if (passwordNumberCriteriaTotal > 7 && passwordNumberCriteriaTotal < 129) {
          alert ("You have chosen a password of " + passwordNumberCriteriaTotal + "!" );
        }

        else {
          alert ("Try Again! Please enter in a number between 8 and 128.")
          passwordNumberCriteria();
        }

        passwordNumberCriteria = passwordNumberCriteriaTotal;

      };


// Password Character Types Function

var differentCharacterType = function(){
  var specialCharacters = " .\+*?[^]$(){}=!<>|:-";
  var lowerCaseAphabet = "abcdefghijkmnopqrstuvwxyz";
  var capitalAphabet = "ABCDEFGHJKMNOPQRSTUVWXYZ";
  var numbersList = "0123456789"
}


//Generate Password 

var generatePassword = function() {
  for(var 1 = 0; i < passwordNumberCriteriaTotal; i++) {
    
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  passwordNumberCriteria();


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
