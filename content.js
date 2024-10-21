
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

setTimeout(replaceButton, 3000);

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

function clickLiveButton() {
    const liveButton = document.querySelector('.LiveBtn');

    if (liveButton) {
        liveButton.click();
    } else {
        console.log("Live button not found.");
    }
}

if (window.location.href === "https://skinport.com/market?sort=date&order=desc") {
    setTimeout(clickLiveButton, 1000);
}

function handleAddToCartClick() {
  window.location.href = "https://skinport.com/cart";
}

document.addEventListener("click", function(event) {
  if (event.target.matches('button.ItemPreview-mainAction') && event.shiftKey) {
    handleAddToCartClick();
  }
});

function checkAllCheckboxes() {
  const tradeLockCheckbox = document.querySelector('#cb-tradelock-1');
  const cancellationCheckbox = document.querySelector('#cb-cancellation-2');
  
  if (tradeLockCheckbox && !tradeLockCheckbox.checked) {
    tradeLockCheckbox.click();
  }
  if (cancellationCheckbox && !cancellationCheckbox.checked) {
    cancellationCheckbox.click();
  }
}

window.addEventListener('load', function() {
  if (window.location.href === "https://skinport.com/cart") {
    setTimeout(checkAllCheckboxes, 500);
  }
});

window.onload = function() {
    function clickProceedToCheckout() {
        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            if (button.textContent.trim() === 'Proceed to Checkout') {
                button.click();
            }
        });
    }

    setTimeout(clickProceedToCheckout, 500);
};

function loadHandlerScript() {
    const handlerScript = document.createElement('script');
    handlerScript.src = chrome.runtime.getURL('handler.js');
    document.head.appendChild(handlerScript);
}

document.addEventListener('DOMContentLoaded', function() {
    loadHandlerScript();
});