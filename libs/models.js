

function completePages(site, pages) {
    for (var n in pages)
        pages[n].site = site;
}

function completeModel(model) {
    if (model.pages)
        completePages(model, model.pages);
}

module.exports = {
    complete: completeModel
};