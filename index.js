/*
push 

let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); 

pop

let fruits = ["Apple", "Banana", "Orange"];
let last = fruits.pop();
console.log(fruits);
console.log(last); 

shift

let fruits = ["Apple", "Banana", "Orange"];
let first = fruits.shift();
console.log(fruits);
console.log(first);

unshift

let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits);

includes

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));
console.log(numbers.includes(6)); 

toString

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.toString();
console.log(result); 

reverse

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); 


join

const array = ['a', 'b', 'c'];
const str = array.join('-');
console.log(str);

concat

const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const combinedArray = array1.concat(array2);
console.log(combinedArray);

flat

const arr1 = [1, 2, [3, 4]];
const flatArr1 = arr1.flat();
console.log(flatArr1);

slice

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

splice

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2);
console.log(fruits);
console.log(removed);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

sort

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

Fill

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
console.log(fruits);

Filter

const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
const adults = ages.filter(checkAdult);
console.log(adults); 

some

const ages = [3, 10, 18, 20];
const isAdult = ages.some(age => age > 18);
console.log(isAdult);

every

const numbers = [45, 4, 9, 16, 25];
const allOver18 = numbers.every(function(value) {
  return value > 18;
});
console.log(allOver18); 

foreach

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(function(item) {
  sum += item;
});
console.log(sum); 

Reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

indexof

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3);
console.log(index);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Pineapple");
console.log(index);*/