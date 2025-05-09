//Second largest element

// let res = -Infinity;
// console.log(res != -Infinity);

function secondLargestElement(nums) {
  let largest = nums[0];
  let res = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      res = largest;
      largest = nums[i];
    }

    if (nums[i] < largest && nums[i] > res) {
      res = nums[i];
    }
  }
  if (res != -Infinity) {
    return res;
  } else {
    return nums[0];
  }
}

// console.log(secondLargestElement([10, 10, 10, 10, 10]));

function removeDups(nums) {
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[res - 1]) {
      // 10, 10, 20,30
      nums[res] = nums[i];
      res++;
    }
  }
  return nums;
}

// console.log(removeDups([10, 10, 10, 20, 30, 40]));

//leaders in an array
function leaders(nums) {
  let curMax = nums[nums.length - 1];
  console.log(curMax);
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > curMax) {
      console.log(nums[i]);
      curMax = nums[i];
    }
  }
}

// leaders([7, 10, 4, 10, 6, 5, 2]);

function maxDiff(nums) {
  let curDiff = nums[1] - nums[0];
  let curMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curDiff = Math.max(curDiff, nums[i] - curMin);
    curMin = Math.min(curMin, nums[i]);
  }
  return curDiff;
}

// console.log(maxDiff([2, 3, 10, 6, 4, 8, 1]));

function sortedFreqs(nums) {
  let cnt = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      cnt++;
    } else {
      console.log(cnt, nums[i - 1]);
      cnt = 1;
    }
  }
  //   cnt++;
  console.log(cnt, nums[nums.length - 1]);
  //   return 0;
}

// console.log(sortedFreqs([10, 10, 10, 25, 30, 30]));

//Arrang ealternatively --> this method works but runs with On2,
// which is not desirable in any way
function alterNate(nums) {
  let start = 0;
  while (start <= nums.length - 2) {
    rotate(nums, start);
    // console.log(nums);
    start = start + 2;
  }

  return nums;
}

function rotate(arr, st) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > st; i--) {
    arr[i] = arr[i - 1];
  }
  arr[st] = temp;
  return arr;
}
console.log(alterNate([1, 2, 3, 4, 5, 6]));
