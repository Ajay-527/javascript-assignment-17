var str = "INeuron";
var iterator = str[Symbol.iterator]();
for (let value of iterator) {
  console.log(value);
}
