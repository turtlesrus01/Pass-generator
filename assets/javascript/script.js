// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Variables for user 
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numereric = [0,1,2,3,4,5,6,7,8,9];
  var special = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\:","]","^","_","`","{","|","}","~"];
  var space = " ";
  console.log("Space"+space+"Space");

  passwordText.value = password;

  var numberPrompt = prompt("How many characters would you like in your password between 8-128?");
    
  if (numberPrompt > 8 && numberPrompt < 128) {
    var lowerPrompt = confirm("Would you like to include:lowercase, uppercase, numeric, and/or special characters in your password?");
    var upperPrompt = confirm("Would you like to include:uppercase characters in your password?");
    var numericPrompt = confirm("Would you like to include:numeric characters in your password?");
    var specialPrompt = confirm("Would you like to include:special characters in your password?");
  } else if (!numberPrompt){
    window.alert("Please enter a valid character length.");
  };

  function generatePassword(){

  }


  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

