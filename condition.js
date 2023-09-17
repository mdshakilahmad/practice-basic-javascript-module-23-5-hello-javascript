/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
 */

const country = "Bangladesh";
const salary = 50000;
const isGraduate = false;
const car = 1;

if (country === "Bangladesh" && salary >= 50000) {
  console.log("biye koro");
} else {
  console.log("pore biye koro");
}

// ----------
if ((salary >= 20000 && car >= 1) || isGraduate == true) {
  console.log("yes prem koro");
} else {
  ("prem korbo na");
}
