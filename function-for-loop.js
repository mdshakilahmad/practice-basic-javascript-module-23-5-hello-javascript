/*  ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
 */
function old(age) {
  for (let i = 0; i < age.length; i++) {
    // console.log(i);
    const index = i;
    const element = age[index];
    // console.log(element);
    if (element > 80) {
      console.log(element);
    }
  }
}

const friends = [70, 80, 82, 85, 90, 95, 100];
const result = old(friends);
