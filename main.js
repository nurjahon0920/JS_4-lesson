////////// IF —— 1 ///////////
/*
let a = +prompt("Butun son kiriting");
if (a > 0) {
  a++;
  alert(a);
} else {
  console.log(a <= 0);
  alert(a);
}
*/
////////// IF —— 2 ///////////
/*
let a = +prompt("Butun son kiriting");
if (a > 0) {
    console.log(a + 1);
} else if (a === 0) {
    a = 10;
    console.log(a);
} else {
  console.log(a - 2);                                                                                                                                                                                                                                                                                                           
}
*/

////////// IF —— 3 ///////////
/*
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
let c = +prompt("c sonini kiriting");
if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
  console.log(`a b c sonlari butun`);
} else if (
  (Number.isInteger(a) && Number.isInteger(b)) ||
  (Number.isInteger(a) && Number.isInteger(c)) ||
  (Number.isInteger(b) && Number.isInteger(c))
) {
  console.log("2 son butun");
} else {
  console.log("1 butn son ");
}
*/
////////// IF —— 4 ///////////
/*
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
*/
////////// IF —— 5 ///////////
/*
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
if (a < b) {
  console.log(1);
} else if (b < a) {
  console.log(2);
}
*/
////////// IF —— 6 ///////////
/*  
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
if (a < b) {
  console.log(b);
  console.log(a);
} else if (b < a) {
  console.log(a);
  console.log(b);
}
*/
////////// IF —— 7 ///////////
/*
let A = +prompt("A ni kiriting:");
let B = +prompt("B ni kiriting:");

if (A > B) {
  let C = A;
  A = B;
  B = C;
}
console.log(A);
console.log(B);
*/
////////// IF —— 8 ///////////
////////// IF —— 9 ///////////
////////// IF —— 10 //////////
/*
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
let c = +prompt("c sonini kiriting");
if (a < c && a < b) {
  console.log(a);
} else if (b < a && b < c) {
  console.log(b);
} else {
  console.log(c);
}
*/
////////// IF —— 11 //////////
//
////////// CASE —— 1 //////////
let k = +prompt("K ning qiymatini kiriting");
let b = 5;
let amal = 5;
switch (k) {
  case 1:
    console.log(a + b);
    break;
  case 2:
    console.log(a - b);
    break;
  case 3:
    console.log(a / b);
    break;
  case 4:
    console.log(a * b);
    break;
  default:
    console.log("Noto'g'ri kiritildi");
}
////////// CASE —— 2 //////////
////////// CASE —— 3 //////////
////////// CASE —— 4 //////////
////////// CASE —— 5 //////////
////////// CASE —— 6 //////////
