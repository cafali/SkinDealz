//website settings

//hide side panel on live page
setTimeout(function() {
    document.querySelectorAll('div.CatalogPage-filter, div.CatalogPage-filterBg').forEach(function(element) {
        element.style.display = 'none';
    });
}, 3000); // delay in ms


//change live button status
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
