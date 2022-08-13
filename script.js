// select dom elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

const counter2El = document.getElementById('counter2');
const increment2El = document.getElementById('increment2');
const decrement2El = document.getElementById('decrement2');

// initial state
let count = 0;
let count2 = 0;

// event listeners
incrementEl.addEventListener('click', () => {
  count++;
  counterEl.innerText = count;
});

decrementEl.addEventListener('click', () => {
  if (count > 0) {
    count--;
    counterEl.innerText = count;
  } else {
    alert('You can not decrement less then 1');
  }
});

increment2El.addEventListener('click', () => {
  count2++;
  counter2El.innerText = count2;
});

decrement2El.addEventListener('click', () => {
  if (count2 > 0) {
    count2--;
    counter2El.innerText = count2;
  } else {
    alert('You can not decrement less then 1');
  }
});
