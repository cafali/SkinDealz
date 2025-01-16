// Check for the Klarna button
const klarnaClickInterval = setInterval(() => {
      // Locate button by text content
    const klarnaButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.includes("Pay now with Klarna.")     // Locate button by text content
    );

    if (klarnaButton) {
        klarnaButton.click(); // Click the button if found
        console.log("Clicked on Klarna button.");
        clearInterval(klarnaClickInterval);
    }
}, 400); // Check every X ms

// Interval to repeatedly check for the "Continue to Pay now with Klarna." button
const klarnaContinueClickInterval = setInterval(() => {
    // Locate button by text content
    const klarnaContinueButton = Array.from(document.querySelectorAll('button')).find(button =>
        button.textContent.includes("Continue to Pay now with Klarna.")
    );

    if (klarnaContinueButton) {
        klarnaContinueButton.click(); // Click the button if found
        console.log("Clicked on 'Continue to Pay now with Klarna' button.");
        clearInterval(klarnaContinueClickInterval); // Stop the interval after clicking
    }
}, 400); // Check every X ms

setTimeout(function() {
    window.open('https://skinport.com/market?sort=date&order=desc', '_self');
}, 4500); //opens main site to market
