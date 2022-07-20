# Javascript quiz (Basic Level - 3)

Q1 Explain as much as you know about objects in javascript?
 * A javaScript object is an entity having state and behavior. A JavaScript object is a collection of named values.
 ```javascript
 let person = {firstName:"John",lastName:"Doe",age:50, };
```
* Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

Q 2 Can you make a “class” based alternative to it? Using Javascript OOP features.

``` javascript
class vector {
	constructor(){
		this.x =0
		this.y=0
	}
	set setX(x){
		this.x = x;

	}
	set setY(y){
		this.y =y
	}

	create(x,y){
		let obj =object.create(this)
		obj.setX =x
		obj.setY =y
		return obj
	}
}
 let p1=new vector()
 console.log(p1.create(1,2))
 ```









Q 3 Do you think javascript is the language of the future?
* JavaScript is Fast and Scalable.

     JavaScript (Node) is highly scalable (with supersets like TypeScript). Running on a single threaded architecture.
 * Search engines, ecommerce, content management systems, responsive design, social media and phone apps would not be possible without it.


# PROGRAMS 

 Q1 Write code implementations of arr methods 

 * forEach
 ```javascript
 const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
//output: "a"
 "b"
 "c"
 ```

 * map
 ```javascript
 const arr=[5,1,3]
 const doubled =arr.map(x=>x*2 );
 console.log(output); //output:  10,2,6
 ```

 * filter
 ```javascript
 const arr=[5,1,3,2,6]
 const output =arr.filter((x)=x > 4 );
 console.log(output); //output:  5,6
```

 *  reduce
 ```javascript
 const number=[1,-1,2,3]
 const sum =number.reduce((accumlator,cuurent value)=>
 {
    return accumlator+ current value;
 } 0);

 console.log(sum); //output:  5
```

* some
```javascript

 const arr=[1,2,3,4,5]
 console.log(arr.some(element=>element %2===0)); //output:  true
 ```


 * every
 ```javascript
 const arr=[1,2,3,4,5]
 const res= arr.every(isPositive);
  function isPositive(item){
    return item > 0;
  }
  consloe.log(res);
  //output:  true
 ```

 * includes
 ```javascript
 const arr = [1, 2, 3, 4, 5]

console.log(arr.includes(2)) // Output :- true
```

Q 2 Simple array implementation
```javascript
const arr = [1, 2, 3, 4, 5, 6]

console.log(arr) // Output:- [1, 2, 3, 4, 5, 6]
 
```

Q 3  To Do list task>

```javascript
let ToDo = []
let Completed = []

function add(title) {
	if(title === "") 
    return -1

	const id = Math.floor(Math.random() * 10)
	const task = {
		id,
		'task': title
	}
	ToDo.push(task)
	return id
}

function remove(id) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			const idx = ToDo.indexOf(item)
			ToDo.splice(idx, idx+1)
		}
	})
	return result
}

function update(id, title) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			item.task = title
		}
	})
	return result
}

function markAsCompleted(id) {
	let result = false
	ToDo.forEach(item => {
		if(id in item) {
			result = true
			const idx = ToDo.indexOf(item)
			const task = ToDo.splice(idx, idx+1)
			Completed.push(task)
		}
	})
	return result
}
```








