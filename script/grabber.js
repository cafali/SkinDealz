// Config
const targetName = "xxxxxxxxxxxx";  // Name of item (capitalization matters)
const maxItemsLimit = 15;  // Max amount of selected items > (default 15)

// Check if item on page contains target string
function checkItemAndAddToCart(itemElement) {
  const itemName = itemElement.textContent || itemElement.innerText;

  if (itemName && itemName.includes(targetName)) {
    // Find the "Add to Cart" button
    const addToCartButton = itemElement.closest('.ItemPreview').querySelector('.ItemPreview-mainAction');
    if (addToCartButton) {
      addToCartButton.click();  // Click the "Add to Cart" button
    }
  }
}

// Function to process adding items to cart
function addItemsToCart() {
  return new Promise((resolve) => {
    const itemElements = document.querySelectorAll('.ItemPreview-itemName');
    let addedCount = 0;  // Track how many items we've added to the cart

    itemElements.forEach((item, index) => {
      if (addedCount >= maxItemsLimit) return; // Stop when max limit is reached

      const itemName = item.textContent || item.innerText;
      if (itemName && itemName.includes(targetName)) {
        checkItemAndAddToCart(item);  // Check and click the "Add to Cart" button
        addedCount++;
      }

      // Resolve the promise when the loop finishes
      if (index === itemElements.length - 1) {
        setTimeout(() => resolve(addedCount), 500); // delay for UI processing
      }
    });

    // Handle cases where there are no matching items
    if (itemElements.length === 0) resolve(0);
  });
}

// SHIFT + D (Add items to cart and redirect)
document.addEventListener('keydown', async function (event) {
  if (event.shiftKey && event.key === 'D') {
    event.preventDefault();  // Prevent default action

    const addedCount = await addItemsToCart();  // Wait for items to be added to the cart

    if (addedCount > 0) {
      window.location.href = "https://skinport.com/cart";  // Redirect to cart page
    } else {
      alert('No matching items found to add to the cart.');
    }
  }
});
