// Assignment Code
var generateBtn = document.querySelector("#generate");

//Object for password character values 
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
  

  

 

  

    var stringPrompt = prompt("How many characters would you like in your password between 8-128?");
    var passwordLength = Number(stringPrompt);

  if (passwordLength >= 8 && passwordLength <= 128) {
      var lowerPrompt = confirm("Would you like to include: lowercase, uppercase, numeric, and/or special characters in your password?");
      var upperPrompt = confirm("Would you like to include: uppercase characters in your password?");
      var numericPrompt = confirm("Would you like to include: numeric characters in your password?");
      var specialPrompt = confirm("Would you like to include: special characters in your password?");
    } else {
      window.alert("Please enter a valid character length.");
  }

  console.log(passwordLength);
  generatePassword(passwordLength);


  function generatePassword(){
    var functionLength = passwordLength;
    var pass = "";
    console.log(pass);

    function lowerFunction() {
      console.log(pass);
      pass += characterBank["lower"][Math.floor(Math.random()*characterBank.lower.length)];
      console.log(pass);
      return pass;
    };
    
    lowerFunction();

    console.log(functionLength);

    for (i=0 ;i<functionLength; i++){
      if (lowerPrompt===true){
        lowerFunction(pass);
        console.log(pass);
      }
      
    };

    return pass;
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
