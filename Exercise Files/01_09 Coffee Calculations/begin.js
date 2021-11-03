/*
  WRITE YOUR SOLUTION HERE
*/
let coffeesConsumed = [2, 3, 1, 5, 9];

function calcTotal(coffeesArr) {
  const total = coffeesArr.reduce(
    (coffeesNr, totalCoffees) => (coffeesNr += totalCoffees)
  );
  return `The bill is ${total * 1.25}`;
}

console.log(calcTotal(coffeesConsumed));
