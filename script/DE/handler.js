// random interval between 385-440 ms
function getRandomInterval(min = 385, max = 440) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// check for the Klarna button
const klarnaClickInterval = setInterval(() => {
    // locate by text content
    const klarnaButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.includes("Pay now with Klarna.") // Locate button by text content
    );

    if (klarnaButton) {
        klarnaButton.click(); // click button if found
        clearInterval(klarnaClickInterval);
    }
}, getRandomInterval()); // randomize check interval (ms)

// repeatedly check for "Continue to Pay now with Klarna." button
const klarnaContinueClickInterval = setInterval(() => {
    // Locate button by text
    const klarnaContinueButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.includes("Continue to Pay now with Klarna.")
    );

    if (klarnaContinueButton) {
        klarnaContinueButton.click(); // Click button if found
        clearInterval(klarnaContinueClickInterval); // Stop interval after clicking
    }
}, getRandomInterval()); // Randomize check interval

// Timeout to open the market page
setTimeout(function() {
    window.open('https://skinport.com/market?sort=date&order=desc', '_self');
}, 4500); // redirect to LIVE  
