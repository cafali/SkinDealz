// Region AT/EU 
// to use this script, you need to change the region/path in the manifest.json

// select payment method EPSButton (AT)
function clickEPSButton() {
    const epsButton = document.querySelector('.adyen-checkout__payment-method--eps button');
    if (epsButton) {
        epsButton.click();
    } else {
        console.error('EPS button not found');
    }
}

// click EPSButton
function handleMutation(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            if (document.querySelector('.adyen-checkout__payment-method--eps')) {
                observer.disconnect();
                clickEPSButton();
                break;
            }
        }
    }
}

const observerOptions = { childList: true, subtree: true };

const observer = new MutationObserver(handleMutation);

observer.observe(document.body, observerOptions);

// dropdown bank list
function checkAndSelect() {
    var dropdown = document.querySelector('.adyen-checkout__dropdown__list');
    var options = dropdown ? dropdown.querySelectorAll('.adyen-checkout__dropdown__element') : null;
    if (dropdown && options && options.length > 0) {
        options.forEach(function(option) {
            if (option.textContent.trim() === 'BAWAG P.S.K. Gruppe') {
                option.setAttribute('aria-selected', 'true');
                option.click();
            }
        });
    } else {
        setTimeout(checkAndSelect, 2000);
    }
}

checkAndSelect();

// search for any bank (in this case bawag)
function clickButton() {
    const buttonSelector = '.adyen-checkout__button.adyen-checkout__button--pay';
    const textContent = 'Continue to BAWAG P.S.K. Gruppe';
    const buttons = document.querySelectorAll(buttonSelector);
    buttons.forEach(button => {
        if (button.textContent.trim() === textContent) {
            button.click();
        }
    });
}

// force click - repeat every 700s 5 times
function continuouslyClickButton(times) {
    let count = 0;
    const interval = setInterval(() => {
        if (count < times) {
            clickButton();
            count++;
        } else {
            clearInterval(interval);
        }
    }, 700);
}

continuouslyClickButton(5);
// redirect to live page after 4500ms (this value can be adjusted based on your ping/network speed)
setTimeout(function() { 
    window.open('https://skinport.com/market?sort=date&order=desc', '_self');
}, 4500);
