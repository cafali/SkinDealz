//WEBSITE UI SETTINGS

//hide side panel on live page
setTimeout(function() {
    document.querySelectorAll('div.CatalogPage-filter, div.CatalogPage-filterBg').forEach(function(element) {
        element.style.display = 'none';
    });
}, 500); // delay in ms


//change live button status and color
function replaceButton() {
    var button = document.querySelector('.LiveBtn.LiveBtn--isActive');

    if(button) {
        button.innerHTML = 'LIVE by SkinDealz';
        button.style.backgroundColor = '#ed407a';
        button.style.borderColor = '#ed407a';
    } else {
        console.log("Button not found.");
    }
}

setTimeout(replaceButton, 3000); // delay in ms

//click live button on live page
function clickLiveButton() {
    const liveButton = document.querySelector('.LiveBtn');

    if (liveButton) {
        liveButton.click();
    } else {
        console.log("Live button not found.");
    }
}

if (window.location.href === "https://skinport.com/market?sort=date&order=desc") {
    setTimeout(clickLiveButton, 1500); // delay in ms
}

//change logo on website
setTimeout(function() {
    var svgLogo = document.querySelector('.HeaderContainer-logo.logo');
    if (svgLogo) {
        var newLogoLink = document.createElement('a');
        newLogoLink.setAttribute('class', 'HeaderContainer-logoLink');
        newLogoLink.setAttribute('aria-label', 'Skinport');
        newLogoLink.setAttribute('href', '/');
        
        var logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'https://i.imgur.com/BKhM7JR.png');
        logoImg.setAttribute('alt', 'Skinport Logo');
        logoImg.setAttribute('class', 'HeaderContainer-logo logo');
        
        newLogoLink.appendChild(logoImg);
        
        svgLogo.parentNode.replaceChild(newLogoLink, svgLogo);
    }
}, 1000);




//WEBSITE ITEM FILTER

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


//SHIFT + T (Scroll TOP)
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'T') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  });
  









