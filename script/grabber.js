// Grabber (discount filtering & multiple items)

// config
const targetNames = [
  "Natus Vincere | 2020 RMR",
  "Dreams & Nightmares Case",
  "Revolver Case"
]; // add as many names as needed (case-sensitive)
const maxItemsLimit = 15; // number of items to add
const minDiscountPercentage = 21; // discount filtering in %

// check items and add them to the cart
function addItemsToCart() {
  return new Promise((resolve) => {
    const itemElements = document.querySelectorAll('.ItemPreview'); // Select entire item container
    let addedCount = 0;

    itemElements.forEach((itemContainer) => {
      if (addedCount >= maxItemsLimit) return; // stop if limit is reached

      // item-name, discount in %, and cart button
      const nameElement = itemContainer.querySelector('.ItemPreview-itemName');
      const discountElement = itemContainer.querySelector('.GradientLabel.ItemPreview-discount span');
      const addToCartButton = itemContainer.querySelector('.ItemPreview-mainAction');

      // ensure elements exist (name/percent/cart-button)
      if (!nameElement || !discountElement || !addToCartButton) return;

      // item name (remove extra spaces)
      const itemName = nameElement.textContent.trim();
      if (!targetNames.includes(itemName)) return;

      // get discount percentage (remove symbols and extra spaces)
      const discountText = discountElement.textContent.replace(/[^\d]/g, ""); // keep only numbers
      const discountValue = parseInt(discountText, 10);

      // ensure discount meets requirement
      if (isNaN(discountValue) || discountValue < minDiscountPercentage) return;

      // If conditions pass (name/percent) - add to cart
      addToCartButton.click();
      addedCount++;
    });

    setTimeout(() => resolve(addedCount), 450); // UI refresh
  });
}

// SHIFT + D
document.addEventListener('keydown', async (event) => {
  if (event.shiftKey && event.key.toLowerCase() === 'd') {
    event.preventDefault();

    // add items to the cart
    const addedCount = await addItemsToCart();

    // redirect if more than 1 item is added
    if (addedCount > 1) {
      setTimeout(() => {
        window.location.href = 'https://skinport.com/cart';
      }, 900); // redirect to cart after 900ms
    } else {
      alert('SKINDEALZ GRABBER - No matching items found or not enough items to redirect.');
    }
  }
});