function number(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    const index = i;
    const element = items[index];
    sum = sum + element;
    // console.log(index, element);
  }
  return sum;
}

const arr = [5, 10, 15, 20, 25, 5];
const result = number(arr);
console.log(result);
