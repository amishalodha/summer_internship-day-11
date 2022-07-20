

Q1 Why do we use functions in JavaScript?
  * In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want.
   * if we want to write a program and the code is lenghty.for this we can just create a function and define the logic in this. we can use this function multiple times.
   
Q2 What is Function Invocation?
   * Function Invocation is used to executes the function code and it is common to use the term “call a function” instead of “invoke a function".
   ```javascript
   function addFunction(a, b){
    return a + b;
   }
addFunction(111, 232)

```

Q 3 Does a function behave like an object in Javascript? Prove it by an example.
 * yes, function behave like an object.
```javascript
  function message() {
    console.log("Hello!");
}

console.log(typeof message);             
console.log(message instanceof Object);
```    

Q 4 What are Events in Javascript?
* JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.

 * When the page loads, it is called an event. When the user clicks a button, that click too is an event.

 Q5 What is a string?
 * String is an object that represents a sequence of characters. 


 Q6 What is an array? Is it static or dynamic in Javascript?
 * Array is an object that represents a collection of similar type of elements.
 * JavaScript is a dynamically typed language.
 * JavaScript directly allows array as dynamic only. We can perform adding, removing elements based on index values. We no need to write extra logic to perform these operations. While an element removed from an array then array size must be decreased and if an element added to an array then array size becomes increased. 

 Q 7 Difference between Map and Set?
 * A Set is a collection dataset that needs to be composed of unique values.
 * Map is when you have pairs of associated data when we map the keys to the value.

 Q 8 Difference between Array and Map?
 * The difference between an Array and Map is that an Array is just a single collection of elements that can be of any datatype and unique element can be accesed with an index no.
 * Map is a collection of key value pairsit can be accessed with its key whuch can be og any data type.

 Q9 What are array methods? List a few names?
 * Array methods are functions built-in to JavaScript that we can apply to our arrays — Each method has a unique function that performs a change or calculation to our array .

     * arr.push(...items) – adds items to the end,
     *  arr.pop() – extracts an item from the end,
     * arr.shift() – extracts an item from the beginning,
     * arr.unshift(...items) – adds items to the beginning.

Q 10 In how many ways can we traverse through an array in Javascript?
* There are multiple ways one can iterate over an array in Javascript.
```javascript
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```
```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
```

# PROGRAMS
Q1 Reverse an array? Input: [1, 2, 3, 4, 5, 6]
```javascript
const array =[1,2,3,4,5,6]
console.log(array.reverse())  //output: [6,5,4,3,2,1]
```

Q2 Explain the properties of the join array method function via program?
```javascript 
const array=[1,2,3]
console.log(array.join('|')) //output: 1|2|3


console.log(array.join()) //output:1,2,3



console.log(array.join('')) //output: 123



console.log(array.join('-')) //output:-1,-2,-3
```

Q 3 Show all the values of an array in a html webpage using DOM and forEach method?
```javascript
const array=[1,2,3,4]
array.forEach(item=>document.getElementById("arrayvalues").innerText +=item)
```

Q 4 Merge to sets in javascript?
```javascript
const set1 = new Set(['one', 'two']);
const set2 = new Set(['three']);

const set3 = new Set([...set1, ...set2]);
console.log(set3); // output: {'one', 'two', 'three'}
```

