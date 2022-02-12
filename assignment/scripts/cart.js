console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5

let basket = [];

console.log('We have',basket, 'in the basket')

function addItem( item ) {
  if(isFull() === false) {
  basket.push(item);
  return true;
} else {
  return false;
  console.log('Sorry sir, it appears your basket is full')
}
}

console.log('We are adding apples to the basket!', addItem('apples'))
console.log('We are adding bananas to the basket!', addItem('bananas'));
addItem('meat')
addItem('soda')
console.log('Should be last item added (should be true):', addItem('rosemary'))
console.log('Testing isFull function (should be false):', addItem('safflower oil'))
console.log(basket)

function listItems( array ) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

console.log('In the basket we have:');
listItems(basket)


function empty() {
  basket = []
}

console.log('Forget it, we don\'t need this stuff')
empty()
console.log(basket)


//STRETCH

function isFull() {
  if(basket.length < maxItems){
    return false
  } else {
    return true
  }
}

isFull()

function removeItem(item, array) {
  console.log(array.indexOf(item));
  console.log(array.splice(item, array));
  console.log('Removed item:', item)
}

removeItem('meat', basket)
console.log(basket)
