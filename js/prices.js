// Global scope variables
var item1, item2, item3, item4, item5, price1, price2, price3, price4, price5;
var electric_price_list, acoustic_price_list, current_item;

// Find the target elements then
// assigns and handles the event with
// the appropriate helper function
var init = function() {
  item1 = findElement('#elec-item1');
  item2 = findElement('#elec-item2');
  item3 = findElement('#elec-item3');
  item4 = findElement('#acou-item1');
  item5 = findElement('#acou-item2');

  price1 = findElement('#elec-price1');
  price2 = findElement('#elec-price2');
  price3 = findElement('#elec-price3');
  price4 = findElement('#acou-price1');
  price5 = findElement('#acou-price2');

  electric_price_list = [1499.0, 1999.0, 2799.0];
  acoustic_price_list = [4199.0, 1199.99];

  // Add event listeners to each item that call on the handleClick function
  listenTo(item1, 'click', handleClick);
  listenTo(item2, 'click', handleClick);
  listenTo(item3, 'click', handleClick);
  listenTo(item4, 'click', handleClick);
  listenTo(item5, 'click', handleClick);
};

// Helper function for event handling and action
var listenTo = function(element, action, func) {
  if (!element) {
    return false;
  }

  var el = element.addEventListener(
    action,
    function() {
      func(element);
    },
    false
  );

  return el;
};

// Helper function for finding elements by element selector
var findElement = function(selector) {
  if (selector) {
    var el = document.querySelector(selector);
  }

  return el;
};

// Handles the click event listener and takes in the element as a parameter
var handleClick = function(item) {
  current_item = item.id;

  // Switch through the item parameter and find the corresponding item to the price multiplied by the current AZ state tax (5.6%)
  switch (current_item) {
    case 'elec-item1':
      price1.innerHTML =
        'Price: $' + (electric_price_list[0] * 1.056).toFixed(2);
      break;
    case 'elec-item2':
      price2.innerHTML =
        'Price: $' + (electric_price_list[1] * 1.056).toFixed(2);
      break;
    case 'elec-item3':
      price3.innerHTML =
        'Price: $' + (electric_price_list[2] * 1.056).toFixed(2);
      break;
    case 'acou-item1':
      price4.innerHTML =
        'Price: $' + (acoustic_price_list[0] * 1.056).toFixed(2);
      break;
    case 'acou-item2':
      price5.innerHTML =
        'Price: $' + (acoustic_price_list[1] * 1.056).toFixed(2);
      break;
    default:
      alert('We dont have a price for that');
      break;
  }
};

// The init function is called once the DOM is loaded
window.addEventListener('load', init, false);
