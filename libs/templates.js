
var simpletpl = require('simpletpl');
var path = require('path');
var fs = require('fs');

function render(name, model, options) {
    options = options || { };
    
    var filename;
    
    if (options.directory)
        filename = path.join(options.directory, name + '.tpl');
    else
        filename = path.join('templates', name + '.tpl');
        
    var template = fs.readFileSync(filename).toString();
    
    var fn = simpletpl.compile(template, { });
    
    return fn(model);
}

module.exports = {
    render: render
};