function isEven(number) {
  const remainder = number % 2;
  //   console.log(remainder);
  if (remainder === 0) {
    // console.log("number is even");
    return true;
  } else {
    // console.log("numbers is odd");
    return false;
  }
}
const myNumerIsEven = isEven(303);
console.log(myNumerIsEven);
