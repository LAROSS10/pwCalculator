let userChoicesSum = 0
let userSpecCharacters ="" 
let userNumericCharacters = ""
let userLowerCaseLetters = ""
let userUpperCaseLetters = ""
let passwordLength = 0
const staticCharactersArray = '!@#$%(&*';
const specNumericCharacters = '1234567890';
const staticUpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const staticLowerCaseLetters = 'accdefghijklmnopqrstuvwxyz';
let passwordLetters = ""
let password = ""
    // the below four lines of code are the prompts to request the users password lenght options for each character type.
function userPrompts() {
 userSpecCharacters = confirm('Do you want  special characters in your password?');
 userNumericCharacters = confirm('Do you want numbers in your password?');
 userLowerCaseLetters = confirm('Do you want  lower case letters in your password?');
 userUpperCaseLetters = confirm('Do you want uppercase letters in your password?'); 
 userPasswordLength = parseInt(prompt("Enter the password length you would like"))
//this is code to sum of all the user choices so we will now know how long to make the array that will create the password length based on user input
//  userChoicesSum = parseInt(userSpecCharacters) + parseInt(userNumericCharacters) + parseInt(userLowerCaseLetters) + parseInt(userUpperCaseLetters);
console.log(userSpecCharacters)
generatePassword();
}
// document.body.innerHTML}
function generatePassword() {
    if(userSpecCharacters) {passwordLetters += staticCharactersArray};
    if(userNumericCharacters) {passwordLetters += specNumericCharacters};
    if(userLowerCaseLetters) {passwordLetters += staticLowerCaseLetters};
    if(userUpperCaseLetters) {passwordLetters += staticUpperCaseLetters};
console.log(passwordLetters)
for(let i=0; i<userPasswordLength;i++) {
    let index = Math.floor(Math.random() *passwordLetters.length)
password+=passwordLetters[index]
document.getElementById("boxPassword").innerHTML = password
console.log(password)
}
console.log("password generator",password)
}

function pasteToClip(){
    let copyText = document.getElementById("boxPassword");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

// const staticCharactersArray = '!@#$%(&*';
// const specNumericCharacters = '1234567890';
// const staticUpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const staticLowerCaseLetters = 'accdefghijklmnopqrstuvwxyz';


console.log(userChoicesSum)

// var spCharString = '';
// var numCharString = '';
// var upCaseString = '';
// var lowCaseString = '';
// var password = '';
// var totalString = '';


// userPrompts()
// function randomStr(len, arr) { 
//             var ans = ''; 
//             for (var i = len; i > 0; i--) { 
//                 ans +=  
//                   arr[Math.floor(Math.random() * arr.length)]; 
//             } 
//             return ans; 
//         } 
 

// spCharString = randomStr(userSpecCharacters,staticCharactersArray);
// numCharString =randomStr(userNumericCharacters,specNumericCharacters);
// lowCaseString = randomStr(userUpperCaseLetters,staticUpperCaseLetters);
// upCaseString = randomStr(userLowerCaseLetters,staticLowerCaseLetters);
// totalString = spCharString + numCharString + lowCaseString + upCaseString;

// password = randomStr(userChoicesSum,totalString);



// console.log(spCharString);
// console.log(numCharString);

// console.log(upCaseString);

// console.log(lowCaseString);

// console.log(totalString);
// console.log(password);




