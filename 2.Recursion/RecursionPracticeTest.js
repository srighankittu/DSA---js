//Solve all 25 questions from RecursionPracticeTest.md file
function oneToN(n) {
  if (n == 0) return;
  oneToN(n - 1);
  console.log(n);
}

// oneToN(6);

function NToOne(n) {
  if (n == 0) return;
  console.log(n);
  NToOne(n - 1);
}

// NToOne(6);

function NaturalNumSum(n) {
  if (n == 0) return 0;
  return n + NaturalNumSum(n - 1);
}

// console.log(NaturalNumSum(4));

function fact(n) {
  if (n == 0) return 1;
  return n * fact(n - 1);
}

// console.log(fact(5));

function fib(n) {
  if (n <= 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}

// console.log(fib(7));

function isPallindrome(str, st = 0, end = str.length - 1) {
  if (st >= end) return true;
  return str[st] === str[end] && isPallindrome(str, st + 1, end - 1);
}

// console.log(isPallindrome("maadaam"));

function sumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// console.log(sumOfDigits(12341));

// MODERATE LEVEL QUESTIONS

function subSets(str, idx = 0, curStr = "", res = []) {
  if (idx == str.length) {
    res.push(curStr);
    return;
  }
  subSets(str, idx + 1, curStr, res);
  subSets(str, idx + 1, curStr + str[idx], res);
  return res;
}

// console.log(subSets("ABC"));

function subSetSum(nums, res, size = nums.length, index = 0, count = 0) {
  if (size === 0) {
    return res === 0 ? 1 : 0;
  }
  return (
    subSetSum(nums, res, size - 1, index + 1) +
    subSetSum(nums, res - nums[index], size - 1, index + 1)
  );
}

// console.log(subSetSum([1, 2, 3, 3, 1], 4));

function permuts(str, itr = 0) {
  if (itr == str.length) {
    console.log(str);
  }
  for (let i = itr; i < str.length; i++) {
    const newStr = swarIdx(str, i, itr);
    permuts(newStr, itr + 1);
  }
}

function swarIdx(str, i, j) {
  let letters = str.split("");
  [letters[i], letters[j]] = [letters[j], letters[i]];
  return letters.join("");
}

// permuts("ABC");

function balancedParanthesis(
  num,
  curStr = "",
  open = 0,
  close = 0,
  res = [],
  diff = 0
) {
  if (curStr.length == num * 2) {
    if (diff < 0) return;

    res.push(curStr);
    console.log(curStr);

    return;
  }

  if (open < num) {
    balancedParanthesis(
      num,
      curStr + "(",
      open + 1,
      close,
      res,
      (diff = open - close)
    );
  }

  if (close < open) {
    balancedParanthesis(
      num,
      curStr + ")",
      open,
      close + 1,
      res,
      (diff = open - close)
    );
  }

  return res;
}

// console.log(balancedParanthesis(3));

// consecutive binary

function binarySeq(n, curStr = "", idx = 0) {
  if (n === idx) {
    // if (hasConsecutive(curStr)) {
    console.log(curStr);
    // }
    return;
  }
  binarySeq(n, curStr + "0", idx + 1);
  if (curStr == "" || curStr[curStr.length - 1] == "0") {
    binarySeq(n, curStr + "1", idx + 1);
  }
}

// function hasConsecutive(n) {
//   for (let i = 1; i < n.length; i++) {
//     // console.log("Current n", n);
//     if (n[i] == n[i - 1] && (n[i] && n[i - 1]) == "1") {
//       //   console.log("false n", n);
//       return false;
//     }
//   }
//   return true;
// }

// binarySeq(4);

function rightDownPaths(n, m, tp = 0) {
  if (n === 1 && m === 1) {
    // When we're at the destination (1×1 grid), there's exactly 1 path (we're already there)
    return 1;
  }
  if (n === 0 || m === 0) {
    // If either dimension is 0, there can't be a valid grid, so 0 paths
    return 0;
  }

  // Recursive case:
  // The number of paths equals the sum of paths from:
  // 1. The cell to our right (by moving down from current position)
  // 2. The cell below us (by moving right from current position)
  return rightDownPaths(n - 1, m) + rightDownPaths(n, m - 1);
}

// console.log(rightDownPaths(5, 4));

function waysToClimbSteps(n) {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return waysToClimbSteps(n - 1) + waysToClimbSteps(n - 2);
}

// console.log(waysToClimbSteps(3));

function keyPad(dits) {
  const mapper = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "xyz",
  };
  let res = [];
  function back(digits, idx = 0, path = "") {
    if (idx == digits.length) {
      res.push(path);
      return;
    }
    const currentDig = digits[idx];
    const letters = mapper[currentDig];
    for (let letter of letters) {
      back(digits, idx + 1, path + letter);
    }
    return res;
  }
  return back(dits);
}

console.log(keyPad([2, 3]));
