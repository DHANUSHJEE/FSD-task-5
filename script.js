// for loop
let marks = [55, 65, 75, 85, 97];

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}


// for in loop
let car = {
  model: "ford",
  name: "mustang",
  year: 1969,
  owner: "Dhanush",
};

for (let loop in car) {
  console.log(loop, "=>", car[loop]);
}

// for of loop
let years = [1947, 1987, 1999, 2000, 2003, 2010];

for (let num of years) {
  console.log(num);
}


// for each
var no = [11, 12, 234];

no.forEach(function (a, b, c) {
  console.log(a, b, c);
});