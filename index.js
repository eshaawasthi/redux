const { createStore } = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
// ACTION CREATOR - FUNCTION THAT CREATED AN ACTION (OBJECT WITH PROPERTY TYPE)

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// REDUCERS (prevState, action) => newState
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

// CREATE STORE

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

console.log("Updated State", store.getState());

//node index in the terminal
