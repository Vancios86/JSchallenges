/*
  WRITE YOUR SOLUTION HERE
*/

//calculate the nr of possible letter combinations
function factorial(letters) {
  let total;
  for (let i = 1; i <= letters.length; i++) {
    if (total === undefined) {
      total = i;
      continue;
    }
    total *= i;
  }
  return total;
}

console.log(factorial("Codruta"));

//same logic using a recursive function
function recursive(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * recursive(letters.slice(1));
}

console.log(recursive("Codruta"));
