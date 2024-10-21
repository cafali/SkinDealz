//checkboxes & cart settings

//shift to cart
function handleAddToCartClick() {
  window.location.href = "https://skinport.com/cart";
}

document.addEventListener("click", function(event) {
  if (event.target.matches('button.ItemPreview-mainAction') && event.shiftKey) {
    handleAddToCartClick();
  }
});


//go to cart
window.addEventListener('load', function() {
  if (window.location.href === "https://skinport.com/cart") {
    setTimeout(checkAllCheckboxes, 500);
  }
});

//check checkboxes (tradelock + cancel)
function checkAllCheckboxes() {
  const tradeLockCheckbox = document.querySelector('#cb-tradelock-1');  //tradelock box
  const cancellationCheckbox = document.querySelector('#cb-cancellation-2'); //canceletion box
  
  if (tradeLockCheckbox && !tradeLockCheckbox.checked) {
    tradeLockCheckbox.click();
  }
  if (cancellationCheckbox && !cancellationCheckbox.checked) {
    cancellationCheckbox.click();
  }
}

//checkout button in cart when all boxes are checked
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


//load handler.js to finish transaction
function loadHandlerScript() {
    const handlerScript = document.createElement('script');
    handlerScript.src = chrome.runtime.getURL('handler.js');
    document.head.appendChild(handlerScript);
}

document.addEventListener('DOMContentLoaded', function() {
    loadHandlerScript();
});