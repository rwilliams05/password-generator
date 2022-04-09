// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  //assigns vaiables
  let passLength = 0;
  let password = "";
  let i = 0

  const numChar = ("1234567890");
  const specChar = ("!@#$%^&*()_+");
  const lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let passCrit = "";

  //prompts user for password length and assures number of characters is in the correct range
  passLength = window.prompt("How many characters do you want in your password?")
  while (passLength < 8 || passLength > 128) {
    passLength = window.prompt("Password length must be between 8 and 128 characters")
  }

  //collects user input to determine characters sets to be used in password
  if (confirm("Click OK to confirm including uppercase characters.")) {
    passCrit = passCrit.concat(upperCase);
  }
  if (confirm("Click OK to confirm including lowercase characters.")) {
    passCrit = passCrit.concat(lowerCase);
  }
  if (confirm("Click OK to confirm including numeric characters.")) {
    passCrit = passCrit.concat(numChar);
  }
  if (confirm("Click OK to confirm including special characters.")) {
    passCrit = passCrit.concat(specChar);
  }

  //generates random password of requested length and character sets
  while (i < passLength) {
    let index = passCrit.charAt(Math.floor(Math.random() * passCrit.length));
    password = password.concat(index);
    i++
  }

  console.log(password);
  return password;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
