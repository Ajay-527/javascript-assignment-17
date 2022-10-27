var array1 = ["a", "b", "c", "d", "h"];
var array2 = ["e", "f", "g", "h", "a", "i", "j"];
var comvalues = [];
var arrayvalues1 = array1[Symbol.iterator]();
for (var val1 of arrayvalues1) {
  var arrayvalues2 = array2[Symbol.iterator]();
  for (var val2 of arrayvalues2) {
    if (val1 === val2) {
      comvalues.push(val1);
    }
  }
}

console.log(comvalues);
