//multi.test.js

var multi = require('../src/multi.js');
var expect = require('chai').expect;

describe('test multi *',function(){
	it('a*b return true',function(){
		expect(multi(3,4)).to.be.equal(12);
	});
});
