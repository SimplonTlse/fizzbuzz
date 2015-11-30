'use strict';

var assert = require('assert');
var fizz = require('./fizzbuzz.js');

describe('FizzBuzz', function(){
	it('should return fizz for numbers divisible by three', function() {
			assert.equal('fizz', fizz(3));
			assert.equal('fizz', fizz(6));
			assert.equal('fizz', fizz(9));
			assert.equal('fizz', fizz(33));
			assert.equal('fizz', fizz(39));
	});

	it('should return buzz for numbers divisible by five', function() {
			assert.equal('buzz', fizz(5));
			assert.equal('buzz', fizz(50));
			assert.equal('buzz', fizz(55));
			assert.equal('buzz', fizz(500));
			assert.equal('buzz', fizz(25));
	});

	it('should return fizzbuzz for numbers divisible by three & five', function() {
			assert.equal('fizzbuzz', fizz(15));
			assert.equal('fizzbuzz', fizz(60));
			assert.equal('fizzbuzz', fizz(90));
			assert.equal('fizzbuzz', fizz(150));
			assert.equal('fizzbuzz', fizz(30));
	});

	it('should return the number for numbers not divisible by three nor five', function() {
			assert.equal(7, fizz(7));
			assert.equal(8, fizz(8));
			assert.equal(2, fizz(2));
			assert.equal(13, fizz(13));
			assert.equal(4823, fizz(4823));
	});

	it('should return the number for numbers not divisible as a number', function() {
			assert.equal("number", typeof fizz(7));
			assert.equal("number", typeof fizz(8));
			assert.equal("number", typeof fizz(2));
			assert.equal("number", typeof fizz(4823));
	});
});