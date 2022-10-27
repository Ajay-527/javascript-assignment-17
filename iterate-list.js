let list = ["John", "Rohn", "Danny", "James"];
let value = list[Symbol.iterator]();
for (let v of value) {
  console.log(v);
}
