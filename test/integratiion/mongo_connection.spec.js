/**
 * Created by achiliku on 24/07/2017.
 */

const dbURI    = 'mongodb://localhost/local';
const mongoose = require('mongoose');
const Person    = mongoose.model('Person', new mongoose.Schema({name : String, age : Number}));
const assert   = require('assert');

describe("Example to test API connection", function() {
	beforeEach(function(done) {
		if (mongoose.connection.db) return done();
		mongoose.connect(dbURI, done);
	});

	it("should be insert success", function(done) {
		new Person({name: 'achiliku', age: 23}).save();
		done()
	});

	it("should be find success", function(done) {
		Person.find(function(err, person) {
			person = {name: person[0]._doc.name, age: person[0]._doc.age}
			assert.deepEqual(person, {name: 'achiliku', age: 23});
			done();
		})
	});

	it('should be clear db success', function(done) {
		const clearDB  = require('mocha-mongoose')(dbURI);
		clearDB(function(err) {
			if(err) return done(err);
			Person.findOne(function(err, person) {
				assert.deepEqual(person, null);
				done();
			})
		})
	});
});