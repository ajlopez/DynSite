

function completePages(site, pages) {
    pages.forEach(function (page) {
        page.site = site;
    });
}

function completeModel(model) {
    if (model.pages && Array.isArray(model.pages))
        completePages(model, model.pages);
}

module.exports = {
    complete: completeModel
};