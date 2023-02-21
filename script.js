// PRVI

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0
// const min = (arr, toReturn) => {
//   let result;

//   if (toReturn == "value") {
//     const sortedArr = arr.sort((a, b) => a - b);
//     result = sortedArr[0];
//   } else if (toReturn == "index") {
//     const arrofNumbers = [...arr];
//     const sortedArr = arrofNumbers.sort((a, b) => a - b);
//     const min = sortedArr[0];
//     result = arr.indexOf(min);
//   }
//   console.log(result);
//   return result;
// };
// min([3, 1, 2, 4, 5], "index");
// min([3, 1, 2, 4, 5], "value");

// DRUGI

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// const Count = (arr) => {
//   let count = 0;
//   let count2 = 0;
//   arr.forEach((element) => {
//     if (element >= 0) {
//       count++;
//     } else if (element < 0) {
//       count2 = count2 + element;
//     }
//   });
//   console.log(count, count2);
//   return [count, count2];
// };
// Count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

// Treci

// https://www.codewars.com/kata/57cc981a58da9e302a000214
// const limit = (arr,limit) =>{
//   let nesto = true;
//   arr.forEach(element => {
//     if(element>limit){
//       nesto=false;
//     }
//   });
//   return nesto;
// }

// Cetvrti

// https://www.codewars.com/kata/511f11d355fe575d2c000001
// const twoOldestAges = (arr) => {
//   arr.sort((a, b) => b - a);
//   console.log(arr[  1], arr[0]);
//   return [arr[1], arr[0]];
// };
// twoOldest([1, 2, 10, 8]);

// Peti

// https://www.codewars.com/kata/580a4734d6df748060000045

// const isSortedAndHow = (arr) => {
//   let counter = 0;
//   let counter1 = 0;
//   const arrofNumbers = [...arr];
//   const arrofNumbers1 = [...arr];
//   const sortedArr = arrofNumbers.sort((a, b) => a - b);
//   const sortedArr1 = arrofNumbers1.sort((a, b) => b - a);
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] == sortedArr[i]) {
//       counter++;
//     }
//   }
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] == sortedArr1[i]) {
//       counter1++;
//     }
//   }
//   if (counter == arr.length) {
//     return "yes, ascending";
//   } else if (counter1 == arr.length) {
//     return "yes, descending";
//   } else {
//     return "no";
//   }
// };

// Sesti
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// const wave = (str) => {
//   let lowercase = str.toLowerCase();
//   const words = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       continue;
//     }
//     lowercase = lowercase.toLowerCase();
//     let splited = lowercase.split("");
//     splited[i] = splited[i].toUpperCase();
//     lowercase = splited.join("");
//     words.push(lowercase);
//   }
//   console.log(words);
//   return words;
// };
// wave("asddas");

// Sedmi
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

// const isDivisible = (n, x, y) => {
//   return n % x === 0 && n % y === 0;
// };

// Osmi
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

// const sortByLength = (array) => {
//   return array.sort((a,b)=>a.length - b.length)
// };

// Deveti
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
// const sumOfMinimums = (array) => {
//   let sum = 0;
//   for (let i = 0; i <= array.length - 1; i++) {
//     let nest = array[i][0];

//     array[i].sort((a, b) => a - b);
//     sum = sum + array[i][0];
//   }
//   console.log(sum);
//   return sum;
// };
// sumOfMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100],
// ]);

// Deseti
// https://www.codewars.com/kata/63cbe409959401003e09978b
const setReducer = (array) => {
  let b = [];
  counter = 1;
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
// // [1, 1, 1, 3, 2, 1]
setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]);

// Jedanaest
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// const repeatStr = (n, s) => {
//   let word = "";
//   for (let i = 0; i < n; i++) {
//     word = word + s;
//   }
//   console.log(word);
//   return word;
// };
// repeatStr(6, "I");
// Dvanaest
//https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
// const largest=(n, array) =>{
//   // Find the n highest elements in a list
//   return [];
// }
// largest(2, [7,6,5,4,3,2,1])
// Trinaest
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
// const noSpace = (x) => {
//   x = x.split("");
//   x = x.filter(function (item) {
//     return item != " ";
//   });
//   return x.join("");
// };
// noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
// Cetrnaest
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// const countSheeps = (arrayOfSheep) => {
//   let count = 0;
//   arrayOfSheep.array.forEach((element) => {
//     if (element === true) {
//       count++;
//     }
//   });
//   return count;
// };
// Petnaest
//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// const sumArray = (array) => {
//   if (!array || array.length <= 2) return 0;

//   let sum = 0;
//   array.sort((a, b) => a - b);
//   array.pop();
//   array.shift();
//   array.forEach((element) => {
//     sum = sum + element;
//   });
//   return sum;
// };
// sumArray([6, 2, 1, 8, 10]);
// Sesnaest
//https://www.codewars.com/kata/5875b200d520904a04000003
// const enough = (cap, on, wait) => {
//   if (on + wait <= cap) {
//     return 0;
//   } else {
//     return wait + on - cap;
//   }
// };
// enough([10, 5, 5]);
