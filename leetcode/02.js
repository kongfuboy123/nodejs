// var addTwoNumbers = function(l1, l2) {
//     let arr = parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''));
    
//     return arr.toString().split('').reverse().map(Number);
// };
// let arr = addTwoNumbers([2,4,3],[5,6,4]);
// console.log(arr);
// let str1 = parseInt([2,4,3].reverse().join(''));
// let str2 = parseInt([5,6,4].reverse().join(''));
// console.log(str1+str2);
// let str3 = str1 + str2;
// console.log(str3.toString().split('').reverse().map(Number));

var addTwoNumbers = function(l1, l2) {
  let arr = parseInt(l1.reverse().join(''))+parseInt(l2.reverse().join(''));
  
  return arr.toString().split('').reverse().map(Number);
};
let arr = addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]);
console.log(arr);