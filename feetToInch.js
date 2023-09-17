/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
 */
/* 
let myFeet = 0.08333333333333333;
const myInches = myFeet * 12;
console.log(myInches);
 */

function feetToInch(feet) {
  const Inches = feet / 0.08333333333333333; //0.0833333333 feet (1 inch)
  return Inches;
}

const dadaFeet = 2;
const dadaInches = feetToInch(dadaFeet);
console.log(dadaInches);
