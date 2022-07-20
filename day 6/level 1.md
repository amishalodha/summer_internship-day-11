# Javascript quiz  (Basic Level - 1) -

# THEORY

  Ques 1. What is JavaScript? 

 * JavaScript is a scripting language with object-oriented capabilities that enables you to create interactive web pages. It is a client side scripting language that executes in the user's browser.

Ques 2.What is the difference between b/w let and var? 

 * VAR:- It is Function scope.
         It allows to redeclare the variables.


 *LET:- It is Block scope.
         It doesn’t allow to redeclare the variables.


Ques 3. Why do we prefer const over var?

* var declarations are globally scoped or function scoped while const is block scoped.
const variables never  update or re-declared.
 
Ques 4 .What is the use of javascript in web browsers? 
* JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.

Ques 5  What are Objects?

* Object is an entity having state and behavior (properties and method).
         We declare object in javascript like this-
        ```javascript
         Const name{
         Age: 20 ,
         Subject: ‘English’
        }
        ```

 Ques 6  What is an array and how is it different from an Object in Javascript?

 * An array is an object that can store multiple values at once. 
For example, const words = ['hello', 'world', 'welcome']; 


Ques 7  What is a function? 

*   Function   are used to perform operations.We can call a function several  times so it save coding.


Ques 8  How can we implement call by value and call by reference in Javascript?

 
* Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument. Parameters passed as an arguments create its own copy.
```javascript
Let a=5;
Let b=a;
Let b=a+5;                             
console.log(a);
console.log(b);
OUTPUT:
5
10
 
 ```
 * Pass by Reference: In Pass by Reference, Function is called by directly passing the address of the variable as an argument.If we change the value inside the function also change the original value.
Ex:
```javascript
Let obj 1={
Name:”john” ,
No: “123”
}
Let obj 2=obj1;
Obj 2. No=”456”;
console.log(obj1);
console.log(obj2);
OUTPUT:
 
{Name:’John’ ,
 No:’456’
{{Name:’John’ ,
 No:’456’}
 ```
 
Ques 9 What are the primitive data types in Javascript?
 
* In JavaScript, a primitive  data type is data that is not an object and has no methods or properties. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
 
Ques10 . What is DOM?
*  DOM stands for Document Object Model, with the help of this we can change all the elements of a HTML document. It is constructed as a tree of Objects.
 
 
 
 
 
 
Ques 11 Why do we need DOM?
 

* The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
 

 # PROGRAMS

 Q1 Average of array number in js?

 ```javascript 
 const arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);
```

Q 2  Ascending and descending order?

```javascript
const arr = new Array(1,54,78,3,24);

  arr.sort();
  console.log( arr);
  arr.reverse();
  console.log(arr);
  ```

Q 3 SWAP two no?



  ```javascript
  const swap=(num 1 , num 2) => {
    let temp =num 1
    num 1=num 2
    num 2 = temp

    return {num 1 , num 2}
  }

  consloe.log(swap (4,5))
```

Q 4 Fibonnaci series?

```javascript
var a =0 , b=1;
console.log(a);
console.log(b);

for(var i =0; i<=7 ;i++){
    var temp = a+b;
    console.log(temp);
    a=b;
    b=temp;
}
```
Q 5 show a variable in html using dom?
```javascript
let a =10;
document.write(a)
```