//webiste item filter

//price filter (lowest price)
function hideItemsBasedOnPrice() {
    let items = document.querySelectorAll('.CatalogPage-item.CatalogPage-item--grid');
    let itemsToHide = [];

    items.forEach(item => {
        let priceElement = item.querySelector('.ItemPreview-priceValue .Tooltip-link');

        if (priceElement) {
            let priceText = priceElement.innerHTML.replace(',', '.').replace(/[^\d.]/g, '');
            let price = parseFloat(priceText);

            if (price < 0.13) { // adjust price (if < 0.XX then hide) (X.XX / XX.XX)
                itemsToHide.push(item);
            }
        }
    });

    let index = 0;
    function hideNextItem() {
        if (index < itemsToHide.length) {
            itemsToHide[index].style.display = 'none';
            index++;
            setTimeout(hideNextItem, 100); // 100ms delay between each item (hide delay)
        }
    }

    hideNextItem(); // start hiding items
}

// SHIFT + C
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'C') {
        event.preventDefault(); 
        hideItemsBasedOnPrice(); 
    }
});


// percent filter
function hideLowDiscountItems() {
    const items = Array.from(document.querySelectorAll('.CatalogPage-item'));
    let index = 0;

    function hideNextItem() {
        if (index < items.length) {
            const item = items[index];
            const discountElement = item.querySelector('.GradientLabel.ItemPreview-discount span');

            if (discountElement) {
                const discountValue = parseInt(discountElement.textContent.replace('−', '').trim());

                if (discountValue < 21) {  // Adjust Percent (default lower then 21% - hide)
                    item.style.display = 'none'; 
                }
            }

            index++;
            setTimeout(hideNextItem, 10); // adjust delay (ms)
        }
    }

    hideNextItem();
}

// SHIFT + X (Percent)
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'X') {
        event.preventDefault();
        hideLowDiscountItems();
    }
});