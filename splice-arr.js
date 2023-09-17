const arr = ["shakil", "rashed", "karim", "shapon"];
// splice korle original arry change kore

//ekhane 1 theke 2 porjonto delete kore abar sheikhanei naton duita add kora hoiche
const deleteAndAdd = arr.splice(1, 2, "jubayed", "faysal");
console.log(deleteAndAdd);
console.log(arr);
