/*  ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
 */
const profile = {
  name: "Shakil",
  age: 24,
  phone: 1981871103,
};

const kyes = Object.keys(profile);
const values = Object.values(profile);
console.log(kyes);
console.log(values);

profile.phone = 1933531058;
console.log(profile);
profile["age"] = 20;
console.log(profile);

/* 
const property = Object.keys(profile);
// console.log(keys);

for (let i = 0; i < property.length; i++) {
  // console.log(i);
  const index = i;
  const element = property[index];
  console.log(element);
}
 */
