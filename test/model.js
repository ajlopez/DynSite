
var models = require('../libs/models');

exports['complete site in model'] = function (test) {
    var model = {
        name: 'model',
        pages: [ { name: 'page1' }, { name: 'page2' }]
    };
    
    models.complete(model);
    
    test.ok(model.pages[0].site);
    test.strictEqual(model.pages[0].site, model);
    test.ok(model.pages[1].site);
    test.strictEqual(model.pages[1].site, model);
}