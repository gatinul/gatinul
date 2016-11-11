var currency = require('./lib/currency');

console.log('50澳元等于'+currency.canadianToUS(50)+'美元');

console.log('30美元等于'+currency.USToCanadian(30)+'澳元');
