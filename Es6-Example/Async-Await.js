/**
 * Created by achiliku on 26/07/2017.
 */
"use strict";

const Promise = require('bluebird');
const request = require('request');
const _       = require('lodash');

function run(param) {
	return new Promise(function(resolve, reject) {
		if(param === 1) resolve(1);
		if(param !== 1) reject('main run error');
	})
}

function start(param) {
	return new Promise(function(resolve, reject) {
		if(param === 1) resolve(2);
		if(param !== 1) reject('main start error');
	})
}

let arrayPromise = [];
arrayPromise.push(run(1));
arrayPromise.push(start(1));

async function main() {
	Promise.all([run(1), start(1)])
	.then()
	.catch(err => console.log(err))
	
	
	try {
		await run(1);
		await start(1);
	} catch (err) {
		console.log(err);
	}
}

main();

// Async function always return Promise

async function run1(param) {
	if(param === 1) return Promise.resolve(1);
	
	if(param === 0) return Promise.reject('main1 run err');
	
	if(param !== 1) return Promise.reject(new Error('Problem!'));
}

async function start1(param) {
	if(param === 2) return 222;
	
	if(param !== 2) throw 'main1 start error'
}

async function main1() {
	
	try {
		await Promise.all([run1(1), start1(2)]);
	} catch (err) {
		console.log(err);
	}
	try {
		await run1(1);
	    await start1(2);
	} catch (err) {
		console.log(err);
	}
}

main1();

async function downloadContent(urls) {
	return await Promise.all(urls.map(url => {
		return request.get(url)
	}))
}
let urls = ['https://www.google.com.vn/', 'https://translate.google.com/'];

downloadContent(urls).then((rs) => {
	//console.log(rs);
})

let array = [1, 2, 3, 4];
let evens = _.remove(array, function(n) {
	return n % 2 === 0;
});

console.log(array);
// => [1, 3]

console.log(evens);

// => [2, 4]

function getting(param, index) {
	if(param === 3)
		if(index === 2) return 'index 2';
		else return 'hello world';
	else
		return'nothing';
	//
	//if (param === 2)
	//	console.log('hello world');
	//else
	//	console.log('1111');
}

getting(3, 2);

let arr = [1, 2, 3, 4, 5, 6];

Promise.mapSeries(arr, function(item) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log(item);
			resolve(item)
		}, 1000)
	})
}).then(() => console.log(arr))
