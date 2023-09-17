function milesToKilometers(miles) {
  const kilomiters = 1.609344; // 1 kilometers = 1.609344
  const milesTOkilomiterConvert = kilomiters * miles;
  return milesTOkilomiterConvert;
}

const result = milesToKilometers(5);
console.log(result);

/* 
// chat gpt
function milesToKilometers(miles) {
  // 1 mile is approximately equal to 1.60934 kilometers
  return miles * 1.60934;
}

// Example usage:
const miles = 5;
const kilometers = milesToKilometers(miles);
console.log(`${miles} miles is approximately ${kilometers} kilometers`);
 */
