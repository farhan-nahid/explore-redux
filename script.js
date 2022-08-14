// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// reducer function
const reducerFunction = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

// create a store
const store = Redux.createStore(reducerFunction);

// Update UI Manually (Because it's a vanilla JS project)
const renderFunction = () => {
  const myState = store.getState();
  counterEl.innerText = myState.value.toString();
};

// Update UI Initially when page load
renderFunction();

store.subscribe(renderFunction);

// increment event handler
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "INCREMENT",
  });
});

// decrement event handler
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "DECREMENT",
  });
});
