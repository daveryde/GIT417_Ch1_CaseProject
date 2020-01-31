// Locates the target elements and add event listeners.
var init = function() {
  // Find the first element and add a click event listener
  var item1 = document.querySelector('#item1');
  var item2 = document.querySelector('#item2');
  var item3 = document.querySelector('#item3');

  // Add event listeners to each item that call on the handleClick function
  item1.addEventListener(
    'click',
    function() {
      handleClick(item1);
    },
    false
  );

  item2.addEventListener(
    'click',
    function() {
      handleClick(item2);
    },
    false
  );

  item3.addEventListener(
    'click',
    function() {
      handleClick(item3);
    },
    false
  );
};

// Handles the click event listener and takes in the element as a parameter
var handleClick = function(item) {
  var price_list, current_item;

  price_list = [1499.0, 1999.0, 2799.0];
  current_item = item.id;

  // Switch through the item parameter and find the corresponding item to the price multiplied by the current AZ state tax (5.6%)
  switch (current_item) {
    case 'item1':
      var price1 = document.querySelector('#price1');
      price1.innerHTML = 'Price: $' + (price_list[0] * 1.056).toFixed(2);
      break;
    case 'item2':
      var price2 = document.querySelector('#price2');
      price2.innerHTML = 'Price: $' + (price_list[1] * 1.056).toFixed(2);
      break;
    case 'item3':
      var price3 = document.querySelector('#price3');
      price3.innerHTML = 'Price: $' + (price_list[2] * 1.056).toFixed(2);
      break;
    default:
      alert('We dont have a price for that');
      break;
  }
};

// The init function is called once the DOM is loaded
window.addEventListener('load', init, false);
