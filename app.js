// Sum of numbers

// let str = prompt("Enter a number: ");
// let number = Number(str);

// console.log(typeof(number));
// console.log(typeof(str));

// let last_digit = 0;
// let sum = 0;
// for(let i = 0; i < str.length; i++) {
//     last_digit = number % 10;
//     if (last_digit % 1 !== 0) {
//         last_digit = parseInt(last_digit);
//     }
//     // console.log(last_digit)
//     number = number / 10;
//     sum = sum + last_digit;
// }
// console.log(sum);


// sum of numbers in range
// let first = +prompt("Enter the starting number: ")
// let second = +prompt("Enter the ending number: ")
// let sum = 0;
// for (first; first <= second; first++) {
//     sum = sum + first;
// }
// console.log(sum);



// Average
// let arr = [];
// let range = +prompt("Enter the range of numbers to calculate average of: ");
// let sum = 0;
// let count = 0;
// let average = 0;
// for (let i=1; i <= range; i++) {
//     arr[i-1] = +prompt("Enter number " + i + " of array: ");
// }
// console.log(typeof(arr));
// console.log(arr);

// for (let i = 1; i <= range; i++) {
//     sum = sum + arr[i-1];
//     count++;
// }
// // console.log(sum);
// average = sum / count;
// console.log(average);


// // Compare strings by count of characters
// let str1 = prompt("Enter string one: ");
// let str2 = prompt("Enter string two: ");

// if (str1.length === str2.length) {
//     console.log("The count of characters of both the strings is equal");
// }
// else console.log("The count of characters of two strings is not equal");


// Swapping first and last charactters of a string
let str1 = prompt("Enter a string: ");
let character = "";
let character2 = "";
let str2 = str1;

let count = str1.length;

for (let i = 0; i < count; i++) {
    if (i === 0) {
        character = str1.charAt(0);
        console.log(character);
    }
    if (i === str1.length-1) {
        character2 = str1.charAt(count-1)
        console.log(character2);
    }
}

for (let i = 0; i < count; i++) {
    if (i === 0) {
        str2 = character2 + str2.slice(1);
    }
    if (i === str1.length-1) {
        str2 = str2.slice(0, count-1) + character;
    }
}

console.log(str2);
