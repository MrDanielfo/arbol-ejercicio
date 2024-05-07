const numberOfRows = 10;
let myArray = [];

for (i = 0; i < numberOfRows; i++) {
  for (j = i; j < numberOfRows; j++) {
    if (j == numberOfRows - 1 && i == 0) {
      myArray.push("*");
    }
    myArray.push(" ");
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    myArray.push("0");
  }
  myArray.push("\n");
}

console.log("---------------------");
console.log(myArray.toString().split(",").join(""));
console.log("---------------------");
