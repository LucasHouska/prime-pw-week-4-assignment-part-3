console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

console.log(basket)

function addItem( item ) {
  basket.push(item);
  return true;
}

console.log(addItem('apples'))
console.log(addItem('bananas'));

function listItems( array ) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

listItems(basket)


function empty() {
  basket = []
}

empty()
console.log(basket)
