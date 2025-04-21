function Rec1() {
  console.log("Rec1");
}
function Rec() {
  console.log("Rec");
  Rec();
}

// Rec();

function fun(n) {
  if (n == 0) return;
  console.log(n);
  fun(n - 1);
  console.log(n);
}

fun(3);

function floorLog(n) {
  if (n == 1) return 0;
  return 1 + floorLog(Math.floor(n / 2));
}

// console.log(floorLog(16));

function Nto1(n) {
  if (n == 0) return;
  console.log(n);
  Nto1(n - 1);
}

// Nto1(5);

function one2N(n) {
  if (n == 0) return;
  one2N(n - 1);
  console.log(n);
}

// one2N(15);

function NnumbersSum(N) {
  //your code goes here
  if (N == 0) return 0;
  return N + NnumbersSum(N - 1);
}

// console.log(NnumbersSum(5));

function factorial(n) {
  //your code goes here
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(15));

function fibonachi(n) {
  if (n == 1) return 1;
  if (n == 0) return 0;

  return fibonachi(n - 1) + fibonachi(n - 2);
}

// console.log(fibonachi(3));

function NaturalNumberSum(n) {
  if (n == 0) return 0;
  return n + NaturalNumberSum(n - 1);
}

// console.log(NaturalNumberSum(4));

function pallindrome(str1, start, end) {
  if (start >= end) return true;
  return str1[start] == str1[end] && pallindrome(str1, start + 1, end - 1);
}

// console.log(pallindrome("madam", 0, 4));

function sumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
} // 2  + 3 ... + 1

// console.log(sumOfDigits(111232));
