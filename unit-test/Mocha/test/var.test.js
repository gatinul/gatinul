var app = require('../src/var.js');
var expect = require('chai').expect;

describe('test var in function',function(){
	it('will error without var',function(){
		expect(app.add(3)).to.be.equal(4);
		expect(app.multi(4)).to.be.equal(8);
	});
});
