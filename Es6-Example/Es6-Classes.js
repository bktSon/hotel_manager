"use strict";

const _  = require('lodash');

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.properties = {}
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
	static get Zero() {
		return new Point(0, 0);
	}
	get name() {
		return this.properties.name;
	}

	set name(name) {
		return this.properties.name = name;
	}
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color
	}
	toString() {
		return super.toString() + ' in ' + this.color;
	}
}

	
class Foo {

	constructor(properties) {
		this.properties = properties;
	}

	static staticMethod() {
		return "classy"
	}

	prototypeMethod() {
		return 'prototypical';
	}

	static classMethod() {
		return 'hello';
	}
}


class Bar extends Foo {
	static classMethod() {
		return super.classMethod() + ', too';
	}
}

/**
 * In a derived class, you must call super() before you can use this:
 */

/**
 * Inside the body of a class definition (constructor, static methods, prototype methods
 */

/**
 * There are two kinds of classes:
 * 1. Point is a base class, because it doesn’t have an extends clause.
 * 2. ColorPoint is a derived class.
 * There are two ways of using super:
 * 1. A class constructor (the pseudo-method constructor in a class definition) uses it like a function call (super(···)), in order to make a superconstructor call (line A).
 * 2. Method definitions (in object literals or classes, with or without static) use it like property references (super.prop) or method calls (super.method(···)), in order to refer to superproperties (line B).
 */

/**
 * First, the pseudo-method constructor. This method is special, as it defines the function that represents the class:
 * Second, static methods. Static properties (or class properties) are properties of Foo itself.
 * Third, prototype methods. The prototype properties of Foo are the properties of Foo.prototype. They are usually methods and inherited by instances of Foo.
 */

/**
 * Point() TypeError: Classes can’t be function-called
 * new Point() OK
 */

/**
 * class declarations are not hoisted
 *
 * foo(); //OK
 *
 * function foo() {
 *	console.log('hello world');
 * }
 *
 * new Foo(); // ReferenceError
 * class Foo{};
 */

/**
 * This section explains four approaches for managing private data for ES6 classes:
 * 1. Keeping private data in the environment of a class constructor
 * 2. Marking private properties via a naming convention (e.g. a prefixed underscore)
 * 3. Keeping private data in WeakMaps
 * 4. Using symbols as keys for private properties
 */


// TODO : Private data for classes
															// TODO: Private data via constructor environments

class Countdown1 {
	constructor(counter, action) {
		Object.assign(this, {
			dec() {
				if (counter < 1) return;
				counter--;
				if (counter === 0) {
					action();
				}
			}
		});
	}
}

/**
 * Pros:
 * 1. The private data is completely safe
 * 2. The names of private properties won’t clash with the names of other private properties (of superclasses or subclasses).
 * Cons:
 * 1. The code becomes less elegant, because you need to add all methods to the instance, inside the constructor (at least those methods that need access to the private data).
 * 2. Due to the instance methods, the code wastes memory. If the methods were prototype methods, they would be shared.
 */

																// TODO: Private data via a naming convention
class Countdown2 {
	constructor(counter, action) {
		this._counter = counter;
		this._action = action;
	}
	dec() {
		if (this._counter < 1) return;
		this._counter--;
		if (this._counter === 0) {
			this._action();
		}
	}
}

/**
 * Pros:
 * 1. Code looks nice.
 * 2. We can use prototype methods.
 * Cons:
 * 1. Not safe, only a guideline for client code.
 * 2. The names of private properties can clash.
 */
                                                                // TODO: Private data via WeakMaps

const _counter = new WeakMap();
const _action = new WeakMap();
class Countdown3 {
	constructor(counter, action) {
		_counter.set(this, counter);
		_action.set(this, action);
	}
	dec() {
		let counter = _counter.get(this);
		if (counter < 1) return;
		counter--;
		_counter.set(this, counter);
		if (counter === 0) {
			_action.get(this)();
		}
	}
}

/**
 * Pros:
 * 1. We can use prototype methods.
 * 2. Safer than a naming convention for property keys.
 * 3. The names of private properties can’t clash.
 * 4. Relatively elegant.
 * Con:
 * 1. Code is not as elegant as a naming convention.
 */


// TODO: class expressions.
// expressions
const MyClass = class {};
const inst = new MyClass();

//console.log(Foo === Foo.prototype.constructor);  //true
//console.log(typeof Foo.staticMethod) // function
//console.log(Foo.staticMethod()); //classy
//console.log(Foo.prototype.prototypeMethod);  [Function: prototypeMethod]
const point = new Point(1, 2);
point.toString() // (1, 2)
//console.log(typeof Point); //function
//console.log(typeof point); //object

// TODO: Getters and setters #
point.name = 'achiliku'; // setter
point.name; //getter
//Point.Zero = new Point(0, 0); In both cases, you get a property Point.ZERO that you can read. In the first case, the same instance is returned every time. In the second case, a new instance is returned every time.

let colorPoint = new ColorPoint(1, 2, 'green');
colorPoint.toString(); //(1, 2) in green
//console.log(colorPoint instanceof ColorPoint); //true
//console.log(colorPoint instanceof Point);  // true
console.log(Bar.classMethod());








