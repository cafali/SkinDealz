//remove side panel on live page
setTimeout(function() {
    document.querySelectorAll('div.CatalogPage-filter, div.CatalogPage-filterBg').forEach(function(element) {
        element.remove();
    });
}, 1000); // 1000ms

