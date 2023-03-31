// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength
var isLowercase
var isUppercase
var isNumbers
var isSpecialCharacters
var passwordBase = [];
var password = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "1234567890".split('');
var specialCharacters =  "~`!@#$%^&*_-+=<>.?/".split('');
var resetPass = "";
var passwordText = document.querySelector("#password");

function promptLength() {
  passwordLength = prompt("How long would you like your password? Choose between 8 and 128 characters.");

  if (passwordLength >= 8 && passwordLength <= 128) {
     return;
  } else {
    alert("Not a valid input! Please try again.");
    promptLength();
  }

};

function isLowercaseTrue() {
  var isTrue = confirm("Would you like lowercase letters?");

  if (isTrue) {
    isLowercase = true;
  } else {
    isLowercase = false;
  }
};

function isUppercaseTrue() {
  var isTrue = confirm("Would you like uppercase letters?");

  if (isTrue) {
    isUppercase = true;
  } else {
    isUppercase = false;
  }
};

function isNumbersTrue() {
  var isTrue = confirm("Would you like numbers?");

  if (isTrue) {
    isNumbers = true;
  } else {
    isNumbers = false;
  }
};

function isSpecialCharactersTrue() {
  var isTrue = confirm("Would you like special characters?")

  if (isTrue) {
    isSpecialCharacters = true;
  } else {
    isSpecialCharacters = false;
  }
};



// Write password to the #password input

function writePassword() {

  passwordText.value = resetPass;

  promptLength();
  isLowercaseTrue();
  isUppercaseTrue();
  isNumbersTrue();
  isSpecialCharactersTrue();

  if (!isLowercase && !isUppercase && !isNumbers && !isSpecialCharacters) {

    alert("You must choose at least one character type! Please try again.");
    writePassword();

  } else {

    if (isLowercase) {
      passwordBase = passwordBase.concat(lowercase);
    }

    if (isUppercase) {
      passwordBase = passwordBase.concat(uppercase);
    }

    if (isNumbers) {
      passwordBase = passwordBase.concat(numbers);
    }

    if (isSpecialCharacters) {
      passwordBase = passwordBase.concat(specialCharacters);
    }

    function randomPassword() {

      for (let i = 0; i < passwordLength; i++) {
        password += passwordBase[Math.floor(Math.random() * passwordBase.length)];
      }

    }

    randomPassword();

    console.log(password);

  }

 

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
