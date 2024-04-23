const redux = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// ACTION CREATOR - FUNCTION THAT CREATED AN ACTION (OBJECT WITH PROPERTY TYPE)

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockedCake(quantity) {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
}

function orderIceCream(quantity) {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
}

function restockedIceCream(quantity) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quantity,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 10,
};

// REDUCERS (prevState, action) => newState
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// CREATE STORE

const store = redux.createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockedCake(5));

store.dispatch(orderIceCream(1));
store.dispatch(restockedIceCream(1));

// BIND ACTION CREATOR - ALternative way of dispatching an action
// const bindActionCreator = redux.bindActionCreators;
// const actions = bindActionCreator({ orderCake, restockedCake }, store.dispatch);
// actions.orderCake();
// actions.restockedCake(5);

unsubscribe();

console.log("Updated State", store.getState());

//node index in the terminal
