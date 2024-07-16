let fruits = ["apple","banana","cherry",];

// console.log(fruits[0]);

// fruits[1] = "blueberry";

// console.log(fruits);

// console.log(fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let fruit of fruits){
//     console.log(fruit);
// }

// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

// let numbers = [1,2,3,4,5 ];

// let sum = 0; // sum of all the integers

// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//     console.log("sum:" + sum);
// }

let numbers = [3, 5, 7, 2, 8];
let max = numbers [0];
 for(let number of  numbers){
    if (number > max) {
        max = number;
    }
 }
console.log(
"max:" + max); // outputs "max: 8"
