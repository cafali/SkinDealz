// Region DT/EU 
// to use this script, you need to change the region/path in the manifest.json

// random interval between 385-440 ms when selecting elements
function getRandomInterval(min = 385, max = 440) {     //adjust if needed
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// check for the Klarna button (Q4 2024 new method)
const klarnaClickInterval = setInterval(() => {
    // locate by text content
    const klarnaButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.includes("Pay now with Klarna.") // Locate button by text content
    );

    if (klarnaButton) {
        klarnaButton.click(); // click button if found
        clearInterval(klarnaClickInterval);
    }
}, getRandomInterval()); // randomize check interval (random value 385-440 ms)

// repeatedly check for "Continue to Pay now with Klarna." button (random timing)
const klarnaContinueClickInterval = setInterval(() => {
    // Locate button by text
    const klarnaContinueButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.includes("Continue to Pay now with Klarna.")
    );

    if (klarnaContinueButton) {
        klarnaContinueButton.click(); // click klarna button
        clearInterval(klarnaContinueClickInterval); // Stop interval after clicking
    }
}, getRandomInterval());  // randomize check interval (random value 385-440 ms)

// redirect to live page after 4500ms (this value can be adjusted based on your ping/network speed)
setTimeout(function() {
    window.open('https://skinport.com/market?sort=date&order=desc', '_self');
}, 4500); // redirect to LIVE  
