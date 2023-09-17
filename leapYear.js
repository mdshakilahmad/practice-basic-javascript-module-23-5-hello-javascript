function isLeapYear(year) {
  const remainder = year % 4;
  //   console.log(remainder);
  if (remainder === 0) {
    return true;
  } else if (remainder === 1) {
    return false;
  } else {
    return "please enter the number";
  }
}

const myYearLeapYear = isLeapYear(2000);
console.log(myYearLeapYear);
