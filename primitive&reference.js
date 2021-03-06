// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is ", num1);
// console.log("value of num2 is ", num2);

// num1++;
// console.log("after incrementing num1, value of num1 is ", num1);
// console.log("after incrementing num1, value of num2 is ", num2);

// //reference types
// //array

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array1");
// console.log("array1", array1);
// console.log("array2", array2);

// clone array
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];  // not good if many elements in arrays
// let array2 = array1.slice(0);       // instead do this
// let array2 = [].concat(array1);        // can also do this

//spread operator.. new way
let array2 = [...array1];
array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);