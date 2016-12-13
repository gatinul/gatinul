var memdb = require('../src/memdb.js');
var expect = require('chai').expect;

describe('测试数据保存',function(){
	it('数据被保存在库中',function(){
		var lmessage = {age:23};
		memdb.save(lmessage);
		var message = memdb.findfirst({age:23});
		expect(message).to.be.equal(lmessage);
	});
});
