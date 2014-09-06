
var models = require('../libs/models');

exports['complete site in model'] = function (test) {
    var model = {
        name: 'model',
        pages: { home: { title: 'Home Page' }, about: { title: 'About us' } }
    };
    
    models.complete(model);
    
    test.strictEqual(model.pages.home.site, model);
    test.strictEqual(model.pages.about.site, model);
}

