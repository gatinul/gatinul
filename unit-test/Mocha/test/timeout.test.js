var expect = require('chai').expect;

describe('timeout.test.js - 超时测试', function() {
  it('测试应该 5000 毫秒后结束', function(done) {
    var x = 1;
    var f = function() {
      x = 2;
      expect(x).to.be.not.ok;
      done();
    };
    setTimeout(f, 4000);
  });
});
