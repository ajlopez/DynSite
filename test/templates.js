
var templates = require('../libs/templates');
var path = require('path');

exports['render hello template'] = function (test) {
    var result = templates.render('hello', { name: 'Adam' }, { directory: path.join(__dirname, 'templates') });
    test.ok(result);
    test.equal(result, "Hello Adam");
};

