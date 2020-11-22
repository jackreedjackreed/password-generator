// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

// arrays of the possible character categories

  // lowercase
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  // uppercase
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // numeric
var numeric = "012345789".split("");
  //special characters
var specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~".split("");


// empty beginning arrays to put characters and password into
var pwChar = [];
var pwArr = []

// get lowercase
function lcYNfunc() {
  var lcYN = prompt("Would you like lowercase characters in your password? type: 'y' for yes and 'n' for no");
    if (lcYN == 'y') {
      alert("Lower case characters: included");
      pwChar = pwChar.concat(lowercase); //new string w/lowercase
      console.log(pwChar);                  
    }
    else if (lcYN == 'n') {
      alert("Lower case characters: not included");
      pwChar = pwChar; // new string w/o lowercase
      console.log(pwChar);
    }
    else {
      alert("Not a valid input, try again");
      lcYNfunc();
    }
}

// get uppercase
function ucYNfunc() {  
  var ucYN = prompt("Would you like uppercase characters in your password? type: 'y' for yes and 'n' for no");
    if (ucYN == 'y') {
      alert("Upper case characters: included");
      pwChar = pwChar.concat(uppercase); //new string w/uppercase
      console.log(pwChar);
    }
    else if (ucYN == 'n') {
      alert("Upper case characters: not included");
      console.log(pwChar); //new string w/o uppercase
    }
    else {
      alert("Not a valid input, try again");
      ucYNfunc();
  }
}

// get numeric
function nYNfunc() {
var nYN = prompt("Would you like numerical characters in your password? type: 'y' for yes and 'n' for no");
  if (nYN == 'y') {
    alert("Numerical characters: included");
    pwChar = pwChar.concat(numeric); //new string w/numerical
    console.log(pwChar); 
  }
  else if (nYN == 'n') {
    alert("Numerical characters: not included"); //new string w/o numerical
    console.log(pwChar);
  }
  else {
    alert("Not a valid input, try again");
    nYNfunc();
  }
}

// get special
function sYNfunc() {
var sYN = prompt("Would you like special characters in your password? type 'y' for yes and 'n' for no");
  if (sYN == 'y') {
    alert("Special characters: included");
    pwChar = pwChar.concat(specialChar); //new string w/special
    console.log(pwChar);
  }
  else if (sYN == 'n') {
    alert("Special characters: not included"); //new string w/o special
    console.log(pwChar);
  }
  else {
    alert("Not a valid input, try again");
    sYNfunc();
  }
}


// call this function to get all the desired character inputs
function getChar() {
  var lengthEl = prompt("How many characters in your password? (must have at least 8 and no more than 128)");
    if (lengthEl >= 8 && lengthEl <= 128) { // at least 8 and no more than 128 characters
      alert(lengthEl + " characters it is!");
      console.log(lengthEl);
      lcYNfunc();
      ucYNfunc();
      nYNfunc();
      sYNfunc();
      createPW();
    }
    else {
      alert("Not a valid input, try again.");
      getLength();
    }
  

  function createPW () {
    for (i = 0, lengthEl; i < lengthEl; i++) {
      pwArr.push(pwChar[Math.floor(Math.random() * pwChar.length)]);
      //console.log(pwArr);
    }
    var password = pwArr.join("");
    alert("Here is your password: " + password);
  }
}

getChar();



}

// Write password to the #password input
function writePassword() {
  //
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// after button press, prompt for selecting password criteria




