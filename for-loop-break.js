const items = ["shakil", "karim", "rashed", "faisal"];
for (let i = 0; i < items.length; i++) {
  let item = items[i];
  console.log(i, item);
  if (item === "rashed") {
    break;
  }
}
