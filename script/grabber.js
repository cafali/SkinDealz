//beta item grabber 
//need to add handler.js forwarding

// config
const targetName = "North";  // name of item (capitalization matters)
const maxItemsLimit = 15;  // max amount of selected items > (default 15)

// check if item on page contains target string
function checkItemAndAddToCart(itemElement) {
  const itemName = itemElement.textContent || itemElement.innerText;

  if (itemName && itemName.includes(targetName)) {
    // find the "Add to Cart" button
    const addToCartButton = itemElement.closest('.ItemPreview').querySelector('.ItemPreview-mainAction');
    if (addToCartButton) {
      addToCartButton.click();  // Click the "Add to Cart" button
      // console.log('Added to cart: ', itemName);  // Debug log
    } else {
      // console.log('Add to Cart button not found for: ', itemName);  // Debug log
    }
  }
}

// Function to process adding items to cart
function addItemsToCart() {
  console.log('Adding items to cart...');  // Debug log

  const itemElements = document.querySelectorAll('.ItemPreview-itemName');
  let matchedCount = 0;
  let addedCount = 0;  // Track how many items we've added to the cart

  itemElements.forEach(item => {
    if (addedCount >= maxItemsLimit) {
      // console.log(`Reached the maximum limit of ${maxItemsLimit} items. Stopping.`); // Debug log
      return;  // Stop the loop once the max limit is reached
    }

    const itemName = item.textContent || item.innerText;
    if (itemName && itemName.includes(targetName)) {
      matchedCount++;  // count matching items
      checkItemAndAddToCart(item);  // check and click the "Add to Cart" button
      addedCount++;  
    }
  });

  // console.log(`Added ${addedCount} items to the cart.`);  // Debug log
}


// SHIFT + D (Add items to cart)
document.addEventListener('keydown', function(event) {
  if (event.shiftKey && event.key === 'D') {
    event.preventDefault();  // Prevent default action
    // console.log('Shift + D pressed!');  // Debug log
    addItemsToCart();  // Call the function to add items to the cart
  }
});