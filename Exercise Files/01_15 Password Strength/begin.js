/*
  WRITE YOUR SOLUTION HERE
*/
function checkPassword(password) {
  let upperCaseChar = /(?=.+[A-Z])/;
  let lowerCaseChar = /(?=.+[a-z])/;
  let numberChar = /(?=.+[0-9])/;
  let specialChar = /(?=.+[*+-/_@%&$#])/;
  let minChar = /(?=.{8,})/;
  let isValid =
    upperCaseChar.test(password) &&
    lowerCaseChar.test(password) &&
    numberChar.test(password) &&
    specialChar.test(password) &&
    minChar.test(password);

  return isValid ? "valid password" : "introduce a valid password";
}

console.log(checkPassword("alupigus")); //invalid
console.log(checkPassword("123@Oleee99"));
