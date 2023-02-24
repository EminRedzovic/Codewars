//=======================================================
//1.
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0
const min = (arr, toReturn) => {
  let result;

  if (toReturn == "value") {
    const sortedArr = arr.sort((a, b) => a - b);
    result = sortedArr[0];
  } else if (toReturn == "index") {
    const arrofNumbers = [...arr];
    const sortedArr = arrofNumbers.sort((a, b) => a - b);
    const min = sortedArr[0];
    result = arr.indexOf(min);
  }
  console.log(result);
  return result;
};
// min([3, 1, 2, 4, 5], "index");
// min([3, 1, 2, 4, 5], "value");
//=======================================================
//2.
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
const Count = (arr) => {
  let count = 0;
  let count2 = 0;
  arr.forEach((element) => {
    if (element >= 0) {
      count++;
    } else if (element < 0) {
      count2 = count2 + element;
    }
  });
  console.log(count, count2);
  return [count, count2];
};
// Count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
//=======================================================
//3.
// https://www.codewars.com/kata/57cc981a58da9e302a000214
const limit = (arr, limit) => {
  let nesto = true;
  arr.forEach((element) => {
    if (element > limit) {
      nesto = false;
    }
  });
  return nesto;
};
//=======================================================
//4.
// https://www.codewars.com/kata/511f11d355fe575d2c000001
const twoOldestAges = (arr) => {
  arr.sort((a, b) => b - a);
  console.log(arr[1], arr[0]);
  return [arr[1], arr[0]];
};
// twoOldest([1, 2, 10, 8]);
//=======================================================
//5.
// https://www.codewars.com/kata/580a4734d6df748060000045
const isSortedAndHow = (arr) => {
  let counter = 0;
  let counter1 = 0;
  const arrofNumbers = [...arr];
  const arrofNumbers1 = [...arr];
  const sortedArr = arrofNumbers.sort((a, b) => a - b);
  const sortedArr1 = arrofNumbers1.sort((a, b) => b - a);
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == sortedArr[i]) {
      counter++;
    }
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == sortedArr1[i]) {
      counter1++;
    }
  }
  if (counter == arr.length) {
    return "yes, ascending";
  } else if (counter1 == arr.length) {
    return "yes, descending";
  } else {
    return "no";
  }
};
//=======================================================
//6.
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

const wave = (str) => {
  let lowercase = str.toLowerCase();
  const words = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    lowercase = lowercase.toLowerCase();
    let splited = lowercase.split("");
    splited[i] = splited[i].toUpperCase();
    lowercase = splited.join("");
    words.push(lowercase);
  }
  console.log(words);
  return words;
};
// wave("asddas");
//=======================================================
//7.
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => {
  return n % x === 0 && n % y === 0;
};
//=======================================================
//8.
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

const sortByLength = (array) => {
  return array.sort((a, b) => a.length - b.length);
};
//=======================================================
//9.
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
const sumOfMinimums = (array) => {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    let nest = array[i][0];

    array[i].sort((a, b) => a - b);
    sum = sum + array[i][0];
  }
  console.log(sum);
  return sum;
};
// sumOfMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100],
// ]);
//=======================================================
//10.
// https://www.codewars.com/kata/63cbe409959401003e09978b
const setReducer = (array) => {
  let b = [];
  let counter = 1;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
    } else {
      b.push(counter);
      counter = 1;
    }
  }
  array = b;
  if (array.length > 1) {
    return setReducer(array);
  } else {
    console.log(array[0]);
    return array[0];
  }
};
// setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]);
//=======================================================
//11.
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
const repeatStr = (n, s) => {
  let word = "";
  for (let i = 0; i < n; i++) {
    word = word + s;
  }
  console.log(word);
  return word;
};
// repeatStr(6, "I");
//=======================================================
//12.
//https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
const largest = (n, array) => {
  // Find the n highest elements in a list
  return [];
};
// largest(2, [7,6,5,4,3,2,1])
//=======================================================
//13.
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
const noSpace = (x) => {
  x = x.split("");
  x = x.filter(function (item) {
    return item != " ";
  });
  return x.join("");
};
// noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
//=======================================================
//14.
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
const countSheeps = (arrayOfSheep) => {
  let count = 0;
  arrayOfSheep.array.forEach((element) => {
    if (element === true) {
      count++;
    }
  });
  return count;
};
//=======================================================
//15.
//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
const sumArray = (array) => {
  if (!array || array.length <= 2) return 0;

  let sum = 0;
  array.sort((a, b) => a - b);
  array.pop();
  array.shift();
  array.forEach((element) => {
    sum = sum + element;
  });
  return sum;
};
// sumArray([6, 2, 1, 8, 10]);
//=======================================================
//16.
//https://www.codewars.com/kata/5875b200d520904a04000003
const enough = (cap, on, wait) => {
  if (on + wait <= cap) {
    return 0;
  } else {
    return wait + on - cap;
  }
};
// enough([10, 5, 5]);
//=======================================================
//17.
//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
const findNeedle = (haystack) => {
  const index = haystack.indexOf("needle");
  return "found the needle at position " + index;
};
//=======================================================
//18.
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
// const makeParts = (arr, chunkSize) => {};
//=======================================================
//19.
//https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
const xor = (a, b) => {
  if (a === true && b === true) {
    return false;
  } else if (a === true || b === true) {
    return true;
  } else {
    return false;
  }
};
//=======================================================
//20.
//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => {
  return Math.ceil(year / 100);
};
// century(1705);
//=======================================================
//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
//21.
function DNAtoRNA(dna) {
  nes = dna.split("");

  for (let i = 0; i <= nes.length - 1; i++) {
    if (nes[i] === "T") {
      nes[i] = "U";
    }
  }
  return nes.join("");
}
// DNAtoRNA("TTTT");
//=======================================================
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
//22.
const rps = (p1, p2) => {
  if (p1 == p2) {
    return "Draw!";
  } else if (p1 === "rock" && p2 != "paper") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 != "rock") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 != "scissors") {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
//=======================================================
// Custom exercise to return initials
//23.
const initials = (fullName) => {
  let initial = "";
  fullName = fullName.split(" ");
  if (fullName.length > 1) {
    initial = initial + fullName[0][0] + fullName[1][0];
    initial = initial.toUpperCase();
  } else {
    initial = initial + fullName[0][0] + fullName[0][1];
    initial = initial.toUpperCase();
  }
  console.log(initial);
  return initial;
};
// initials("Emin Redzovic");
//=======================================================
//24.
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
const removeSmallest = (numbers) => {
  if (numbers.length === 0) {
    return [];
  }
  const minNumber = Math.min(...copiedNumbers);

  const minNumberIndex = numbers.findIndex((num) => num === minNumber);

  numbers.splice(minNumberIndex, 1);

  return numbers;
};

// removeSmallest([1, 5, 2, 0, 5, 0]);
//=======================================================
//25.
//https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
const sumNoDuplicates = (numList) => {
  const array1 = [];
  let counter = 0;
  for (let i = 0; i <= numList.length - 2; i++) {
    for (let j = i + 1; j <= numList.length - 1; j++) {
      if (numList[i] === numList[j]) {
        array1.push(numList[i]);
      }
    }
  }
  for (let i = 0; i <= numList.length - 1; i++) {
    if (!array1.includes(numList[i])) {
      counter = counter + numList[i];
    }
  }
  return counter;
};
// sumNoDuplicates([3, 4, 3, 6]);
//=======================================================
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
//26.
const reverseWords = (str) => {
  str = str.split(" ");
  let word = "";
  let nesto = [];
  for (let i = 0; i <= str.length - 1; i++) {
    word = "";
    for (let j = str[i].length - 1; j >= 0; j--) {
      word = word + str[i][j];
    }
    nesto.push(word);
  }
  return nesto.join(" ");
};
// reverseWords("This is an example!");
//=======================================================
//27.
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
const descendingOrder = (n) => {
  n = n + "";
  n = n.split("");
  for (let i = 0; i <= n.length - 1; i++) {
    n[i] = parseInt(n[i]);
  }
  n.sort((a, b) => b - a);
  for (let i = 0; i <= n.length - 1; i++) {
    n[i] = n[i] + "";
  }
  n = n.join("");
  n = parseInt(n);
  return n;
};
// descendingOrder(525);
