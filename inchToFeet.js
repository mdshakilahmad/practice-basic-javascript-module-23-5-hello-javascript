/* let myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);
 */
function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const dadaInches = 24;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);
