// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables assigned for the password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_{}[]+=-";
var characters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword() {
  var output = "";
  var characters = ""
  var passwordLength = parseInt(prompt("Please enter the number of characters you need from 8 to 128"));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "Invalid Password Length, Please enter a number between 8 - 128"
  }
  var isUpperCase = confirm("Include upper case characters");
  var isLowerCase = confirm("Include lower case characters");
  var isNumbers = confirm("Include numbers");
  var isSpecialCharacters = confirm("Include special characters");

  if (isUpperCase) {
    characters += upperCase;
  }
  if (isLowerCase) {
    characters += lowerCase;
  }
  if (isNumbers) {
    characters += numbers;
  }
  if (isSpecialCharacters) {
    characters += specialCharacters;
  }
  if(characters.length === 0){
    return "Please choose atleast 1"
  }
  for (var i = 0; i <= passwordLength; i++) {
    output += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return output;

}