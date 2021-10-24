// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowerCase = confirm("Does your password need a lowercase?");
var upperCase = confirm("Does your password need an uppercase?");
var symbol = confirm("Does your password need a symbol?");
var number= confirm("Does your password need a number?");
var passwordLength = prompt("What is the minimum length of your password?");
var passwordInt = parseInt(passwordLength);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// If statement to determin the length of the password and check
// to see if the password is at least 8 characters long
if (passwordInt >= 8 && passwordInt <= 128){

  // Function for generating passwords
  function generatePassword(){
    var emptyContainer = "";
    var passLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var passUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passSymbol = "!'#$%&()*+-./;:<>=?@[]{}~^";
    var passNumber = "0123456789";

    // Validate wether or not the user has said yes to the above mentioned
    // prompts. If yes then add the appropritae varibles to the empty container

    // Lower case
    if(lowerCase == true){
      emptyContainer += passLowerCase;
    };

    // Upper case
    if(upperCase == true){
      emptyContainer += passUpperCase;
    };

    // Symbol
    if(symbol == true){
      emptyContainer += passSymbol;
    };

    // Number
    if(number == true){
      emptyContainer += passNumber;
    };

    // Create password
    var password = "";
    for( var i = 0; i < passwordInt; i++){
      password += emptyContainer.charAt(Math.floor(Math.random()* emptyContainer.length));
    };
    return password;
  };
}else{
   alert("Password length must be between 8 and 128 characters.");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
