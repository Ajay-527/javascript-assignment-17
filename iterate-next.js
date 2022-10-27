let list = ["John", "Rohn", "Danny", "James"];
let values = list[Symbol.iterator]();
let res = values.next();
while (!res.done) {
  console.log(res.value);
  res = values.next();
}
