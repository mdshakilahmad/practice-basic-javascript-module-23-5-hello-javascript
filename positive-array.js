/* 

৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 



চেষ্টা করবে আমাদের ভিডিও না দেখে প্রব্লেমগুলো করতে। দরকার হলে গুগলে সার্চ দিতে পারবে। আর একান্তই দরকার হলে প্রব্লেম সলভিং এর জন্য আমাদের ভিডিও দেখতে পারবে। তারপর উপরের ৫টা প্রব্লেম সলভিং চ্যালেঞ্জ এর মধ্যে তুমি যদি ৪টা বা ৫টা করে ফেলতে পারো। তাহলে আর তোমার কোন টেনশন নাই। তুমি সামনে এগুতে পারবে। আর তুমি যদি ২টা বা ৩ টা করতে পারো। তাহলে কিছুটা হার্ডওয়ার্ক করতে হবে। আরেকটু ভালো করে বুঝার চেষ্টা করবে। তবে চেষ্টা করতে করতে সামনে এগুতে পারবে। আর যদি একটাও না পারো বা মাত্র একটা পারো। তাহলে আমাদের ইমেইল করে দাও web@programming-hero.com এ । আমরা তোমাকে বিস্তারিত ইমেইলে জানিয়ে দিবো। 



ভালো করে প্রাকটিস করো। আর তারপরেও সময় থাকলে এই মাইলস্টোন এর সিম্পল প্রবলেম সলভিংগুলা (recursive বাদে বাকি প্রব্লেমগুলো) ভালো করে দেখো। সেগুলা রিলেটেড সহজ কিছু প্রবলেম এসাইনমেন্ট এ থাকবে। 



এখন প্যারা নিলে, সামনে আরাম পাবে।
*/

function positiveArray(arr) {
  let positiveNumber = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i]);
    if (arr[i] >= 0) {
      positiveNumber.push(arr[i]);
    } else {
      break;
    }
  }
  return positiveNumber;
}
const numbers = [45, 87, 96, 11, 15, -56, 71, 28];
const result = positiveArray(numbers);
console.log(result);

//Brother
/* 
const numbers = [45, 87, 96, 11, 15, -56, 71, 28];

function getPositiveNumbers(arr) {
  let isFoundNegative = false;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (isFoundNegative) continue;
    if (arr[i] >= 0) {
      result.push(arr[i]);
    } else {
      isFoundNegative = true;
    }
  }
  return result;
}

function getOnlyPositiveNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// const result = positiveArray(numbers);
console.log(getPositiveNumbers(numbers));
console.log(getOnlyPositiveNumbers(numbers));
 */
