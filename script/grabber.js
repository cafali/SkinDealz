//  Grabber 2.0

// Config
const targetName = "Natus Vincere | 2020 RMR"; // Name of item (case-sensitive)
const maxItemsLimit = 15; // Maximum number of items to add

// Function to check items and add them to the cart
function addItemsToCart() {
  return new Promise((resolve) => {
    const itemElements = document.querySelectorAll('.ItemPreview-itemName');
    let addedCount = 0;

    itemElements.forEach((item) => {
      if (addedCount >= maxItemsLimit) return; // Stop if the limit is reached

      const itemName = item.textContent || item.innerText;
      if (itemName && itemName.includes(targetName)) {
        const addToCartButton = item.closest('.ItemPreview').querySelector('.ItemPreview-mainAction');
        if (addToCartButton) {
          addToCartButton.click(); // Click the "Add to Cart" button
          addedCount++;
        }
      }
    });

    // Resolve the promise with the final count
    setTimeout(() => resolve(addedCount), 450); // UI Refresh
  });
}

// Event listener for SHIFT + D
document.addEventListener('keydown', async (event) => {
  if (event.shiftKey && event.key === 'D') {
    event.preventDefault();

    // Add items to the cart and get the count
    const addedCount = await addItemsToCart();
    console.log(`Items added to cart: ${addedCount}`); // Debug log in console

    // Redirect if more than 1 item is added
    if (addedCount > 1) {
      console.log('Redirecting to cart in 900ms...');
      setTimeout(() => {
        window.location.href = 'https://skinport.com/cart';
      }, 900); // Redirect after 900ms
    } else {
      alert('No matching items found or not enough items to redirect.');
    }
  }
});
