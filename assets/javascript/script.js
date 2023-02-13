// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global object for password character values 
var characterBank = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numeric: [1,2,3,4,5,6,7,8,9,0],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
};
/*
Console log to check character arrays
console.log(characterBank.lower);
console.log(characterBank.upper);
console.log(characterBank.numeric);
console.log(characterBank.special);

Console log to test character arrays Math.random access to character arrays
console.log(characterBank["lower"][Math.floor(Math.random()*characterBank.lower.length)]);
console.log(characterBank["upper"][Math.floor(Math.random()*characterBank.upper.length)]);
console.log(characterBank["numeric"][Math.floor(Math.random()*characterBank.numeric.length)]);
console.log(characterBank["special"][Math.floor(Math.random()*characterBank.special.length)]);
*/



// Write password to the #password input
function writePassword() {
  

  

 

  
    //This prompt lets the user confirm the character length of the password and converts this string to a number
    var stringPrompt = prompt("How many characters would you like in your password between 8-128?");
    var passwordLength = Number(stringPrompt);
  //This if statement prompts the user about including certain character sets in the password
  if (passwordLength >= 8 && passwordLength <= 128) {
      var lowerPrompt = confirm("Would you like to include: lowercase, uppercase, numeric, and/or special characters in your password?");
      var upperPrompt = confirm("Would you like to include: uppercase characters in your password?");
      var numericPrompt = confirm("Would you like to include: numeric characters in your password?");
      var specialPrompt = confirm("Would you like to include: special characters in your password?");
    } else {
      window.alert("Please enter a valid character length.");
  }

  console.log(passwordLength);
  //This function call sends the value of the password length prompt to the generatePassword function
  generatePassword(passwordLength);

  //Builds password piece by piece 
  function generatePassword(){
    var functionLength = passwordLength;
    var pass = "";
    console.log(pass);
    //Function for adding lowercase characters to password
    function lowerFunction() {
      console.log(pass);
      pass += characterBank["lower"][Math.floor(Math.random()*characterBank.lower.length)];
      console.log(pass);
      return pass;
    };

    function upperFunction() {
      console.log(pass);
      pass += characterBank["upper"][Math.floor(Math.random()*characterBank.upper.length)];
      console.log(pass);
      return pass;
    };

    function numericFunction() {
      console.log(pass);
      pass += characterBank["numeric"][Math.floor(Math.random()*characterBank.numeric.length)];
      console.log(pass);
      return pass;
    };

    function specialFunction() {
      console.log(pass);
      pass += characterBank["special"][Math.floor(Math.random()*characterBank.special.length)];
      console.log(pass);
      return pass;
    };


    console.log(functionLength);
    //For loop for repeatedly adding characters to password
    for (i=0 ;i<functionLength; i++){
      if (lowerPrompt&&upperPrompt&&numericPrompt&&specialPrompt){
        lowerFunction(pass);
        upperFunction(pass);
        numericFunction(pass);
        specialFunction(pass);
        console.log(pass);
        pass = pass.substring(0,functionLength)
      } 
      
    };
    
    //This returns the final pass string to the password variable
    return pass;
  };
  //This is the starter code that sends the password string out of of the function 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
