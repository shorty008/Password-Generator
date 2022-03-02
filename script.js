var passwordCharacters = "";
var word = "";

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

//Password Character Function
var passwordCharacterCriteria = function (){


  passwordCharacters = passwordCapitalLetters();
  passwordCharacters = passwordLowerLetters(passwordCharacters);
  passwordCharacters = passwordNumbers(passwordCharacters);
  passwordCharacters = passwordSpecialChar(passwordCharacters);

  if (passwordCharacters === "" || passwordCharacters === null) {
    alert("Try again! Please select at least one password of the password criteria");
    passwordCharacterCriteria();
  }
  else {
    alert("You password will contain a random selection containing the following characers:  " + passwordCharacters);
    return passwordCharacters;
  }
};

 //Capital Letters Code    
  var passwordCapitalLetters =function(){
    var capitalLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var capitalLettersPrompt = prompt("Enter Yes if you want to use Capital Letters");
      if (capitalLettersPrompt === "Yes" || capitalLettersPrompt === "yes" || capitalLettersPrompt === "YES"){
        return capitalLetters;
      }
      else {
        capitalLetters = ""
        return capitalLetters;
      }
    };

//Lower Case Letters Code    
var passwordLowerLetters =function(passwordCharacters){
  var lowerLetters ="abcdefghijklmnopqrstuvwxyz";
  var lowerLettersPrompt = prompt("Enter Yes if you want to use Lower Case Letters");
      if (lowerLettersPrompt === "Yes" || lowerLettersPrompt === "yes" || lowerLettersPrompt === "YES"){       
        lowerLetters = lowerLetters + passwordCharacters;
        return lowerLetters;
      }
      else {
        lowerLetters = passwordCharacters;
        return lowerLetters;
      }     
    };

//generate number character code    
var passwordNumbers =function(passwordCharacters){
  var numbers ="0123456789";
  var numbersPrompt = prompt("Enter Yes if you want to use Numbers");
      if (numbersPrompt === "Yes" || numbersPrompt === "yes" || numbersPrompt === "YES"){       
        numbers = numbers + passwordCharacters;
        return numbers;
      }
      else {
        numbers = passwordCharacters;
        return numbers;
      }  
    };

//generate special character code    
var passwordSpecialChar =function(passwordCharacters){
  var specialChar ="!@#$%^&*()";
  var specialCharPrompt = prompt("Enter Yes if you want to use Special Characaters");
  if (specialCharPrompt === "Yes" || specialCharPrompt === "yes"){          
      specialChar = specialChar + passwordCharacters;
        return specialChar;
      }
      else {
        specialChar = passwordCharacters;
        return specialChar;     
    };
  }

//Generate password function

var generatePassword = function(){
  for(var i=0; i<passwordNumberCriteriaTotal; i++){
    word += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return word;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  passwordNumberCriteria();
  passwordCharacterCriteria();
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
