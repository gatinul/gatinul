var module = require('./module');

require("./style.css");
document.write('It works.\n')

document.write(module.text)

module.live(2,3);
