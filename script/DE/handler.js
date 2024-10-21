//region DE

function clickOnlineBankTransferButton() {
    const bankTransferButton = document.querySelector('.adyen-checkout__payment-method--directEbanking button');
    if (bankTransferButton) {
        bankTransferButton.click();
    } else {
        console.error('Online Bank Transfer button not found');
    }
}


function handleMutation(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            if (document.querySelector('.adyen-checkout__payment-method--directEbanking')) {
                observer.disconnect();
                clickOnlineBankTransferButton();
                break;
            }
        }
    }
}

const observerOptions = { childList: true, subtree: true };
const observer = new MutationObserver(handleMutation);
observer.observe(document.body, observerOptions);

function loadConfirmScript() {
    const confirmScript = document.createElement('script');
    confirmScript.src = chrome.runtime.getURL('confirm.js');
    document.head.appendChild(confirmScript);
}

document.addEventListener('DOMContentLoaded', function() {
    loadConfirmScript();
});

function clickButtonWithDelay() {
    const buttons = document.querySelectorAll('.adyen-checkout__button');
    let targetButton;
    buttons.forEach(button => {
        if (button.textContent.trim() === "Continue to Online bank transfer.") {
            targetButton = button;
        }
    });
    if (targetButton) {
        targetButton.click();
    } else {
        console.error("Button not found");
    }
}

setTimeout(clickButtonWithDelay, 1500);


setTimeout(function() {
    window.open('https://skinport.com/account/orders', '_blank');
}, 4000);