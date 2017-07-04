/**
 * Created by achiliku on 04/07/2017.
 */
"use strict"

//Ex.1
let materials = [
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium'
];

materials.map(function(material) {
	return material.length  //	[8, 6, 7, 9]
})


materials.map((material) => {
	return material.length // [8, 6, 7, 9]
})

materials.map(material => {
	return material.length // [8, 6, 7, 9]
})


//Ex.2
function Person1() {
	// The Person() constructor defines `this` as an instance of itself.
	this.age = 0;

	setInterval(function growUp() {
		// In non-strict mode, the growUp() function defines `this`
		// as the global object, which is different from the `this`
		// defined by the Person() constructor.
		this.age++;
	}, 1000);
}


function Person2() {
	let that = this;
	that.age = 0;

	setInterval(function growUp() {
		// The callback refers to the `that` variable of which
		// the value is the expected object.
		that.age++;
	}, 1000);
}


function Person3(){
	this.age = 0;

	setInterval(() => {
		this.age++; // |this| properly refers to the person object
	}, 1000);
}

//Ex.3
/**
 * Since this is not bound in arrow functions, the methods call() or apply() can only pass in parameters. this is ignored.
 */

  let adder = {
	base: 1,

	add: function(a) {
		let f = v => v + this.base;
		return f(a);
	},

	addThruCall: function(a) {
		let f = v => v + this.base;
		let b = {
			base: 2
		};

		return f.call(b, a);
	}
};

adder.add(1);         // This would log to 2
adder.addThruCall(1); // This would log to 2 still

//Ex.4
/**
 * Arrow functions do not bind an arguments object. Thus, in this example, arguments is simply a reference to the same name in the enclosing scope:
 */

let arr = () => arguments;

arr(); // 42

function foo() {
	let f = (i) => arguments[0] + i; // foo's implicit arguments binding
	return f(2);
}

foo(1); // 3


//Ex.5
/**
 * Arrow functions used as methods
 */

let obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function() {
		console.log(this.i, this);
	}
}
//obj.b(); // prints undefined, Window {...} (or the global object)
//obj.c(); // prints 10, Object {...}


//Ex.6
/**
 * Use of the new operator
 */

let Foo = () => {};
//let foo= new Foo(); // TypeError: Foo is not a constructor

/**
 * Use of prototype property
 */

//console.log(Foo.prototype); // undefined


//Ex.7

let func1 = x => x * x;
// concise syntax, implied "return"

let func2 = (x, y) => { return x + y; };
// with block body, explicit "return" needed

let func3 = () => { foo: 1 };
// Calling func() returns undefined!

//let func4 = () => { foo: function() {} };
// SyntaxError: function statement requires a name

func1(1) // 1
func2(1, 3) // 4
func3() // undefined

/**
 * Line breaks
 */
//let func = ()
//  => 1;
// SyntaxError: expected expression, got '=>'


// More Example

// An empty arrow function returns undefined
let empty = () => {};
empty() // undefined


let foobar =  () => {return 'foobar'};
foobar() // foobar


let simple = a => a > 15 ? 15 : a
simple(16) // 16
simple(10) // 10

let max = (a, b) => a > b ? a : b;
max(1, 3) // 3
max(5, 1) // 5

/**
 * Easy array filtering, mapping, ...
 */

let arr1 = [5, 6, 13, 0, 1, 18, 23];

let sum = arr1.reduce((a, b) =>  a + b)
// 66
let even = arr1.filter(v => v % 2 === 0);
// [6, 0, 18]
console.log(even);
let double = arr1.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]





