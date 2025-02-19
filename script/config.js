// SKINDEALZ CONFIG (config.js) - permission: LIVE page
// WEBSITE SETTINGS & UI - adjust values to your liking - delay, price, percent, etc.

// LIVE Auto ON (LIVE BY SKINDEALZ)
setTimeout(() => {
    const marketLink = document.querySelector('.HeaderContainer-link.HeaderContainer-link--market');
    const liveLink = document.createElement('a');
    liveLink.textContent = 'Live';
    liveLink.href = 'https://skinport.com/market?sort=date&order=desc';
    liveLink.className = 'HeaderContainer-link';
    liveLink.style.marginLeft = '0px';
  
    marketLink.parentNode.insertBefore(liveLink, marketLink.nextSibling);
  }, 500); // execute 500ms after page loads

setTimeout(function() {  // hide side panel on live page (filters etc.)
    document.querySelectorAll('div.CatalogPage-filter, div.CatalogPage-filterBg').forEach(function(element) {
        element.style.display = 'none';
    });
}, 500); // execute 500ms after page loads

// change live button status and color to SKINDEALZ
function replaceButton() {
    var button = document.querySelector('.LiveBtn.LiveBtn--isActive');

    if(button) {
        button.innerHTML = 'LIVE by SkinDealz';
        button.style.backgroundColor = '#ed407a';
        button.style.borderColor = '#ed407a';
    }
}

setTimeout(replaceButton, 3000); // delay in ms

// click live button on live page
function clickLiveButton() {
    const liveButton = document.querySelector('.LiveBtn');

    if (liveButton) {
        liveButton.click();
    }
}

if (window.location.href === "https://skinport.com/market?sort=date&order=desc") {
    setTimeout(clickLiveButton, 1500); // delay in ms
}

// change deafult logo on website (not affecting website holiday events)
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
}, 1000); //wait for the page to load - change after 1000ms


// SHIFT + C Price filter
// SHIFT + X  % filter
// SHIFT + T Scroll TOP
// SHIFT + D Grabber
// Q Empty Cart


// WEBSITE ITEM FILTER

// price filter (lowest price) (SHIF+C)
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
    if (event.shiftKey && event.key.toLowerCase() === 'c') {
        event.preventDefault(); 
        hideItemsBasedOnPrice(); 
    }
});

// percent filter (SHIF+X)
function hideLowDiscountItems() {
    const items = Array.from(document.querySelectorAll('.CatalogPage-item'));
    let index = 0;

    function hideNextItem() {
        if (index < items.length) {
            const item = items[index];
            const discountElement = item.querySelector('.GradientLabel.ItemPreview-discount span');

            if (discountElement) {
                const discountValue = parseInt(discountElement.textContent.replace('−', '').trim());

                if (discountValue < 21) {  // adjust Percent (default lower then 21% - hide)
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
    if (event.shiftKey && event.key.toLowerCase() === 'x') {
        event.preventDefault();
        hideLowDiscountItems();
    }
});

// Scroll TOP (SHIFT+T)
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && (event.key === 't' || event.key === 'T')) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
});

// Empty Cart (press Q)
async function simulateClicks() {
    const clickButton = (selector) => {
      const button = document.querySelector(selector);
      if (button) {
        button.click();
      }
    };
  
    // click cart button
    clickButton('.CartButton-button');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
  
    // clear cart
    clickButton('.CartDropdown-clear .ButtonSimple');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
  
    // close cart
    clickButton('.CartDropdown-close .Cross');
  }
  
  // press Q to empty cart
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'q') {
      simulateClicks();
    }
  });