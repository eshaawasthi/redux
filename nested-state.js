const redux = require("redux");
// Use immer library to make efficient and easy management of nested states; produce will take two arguments - state and a draft copy of state
const produce = require("immer").produce;

const initialState = {
  name: "Esha",
  address: {
    street: "121 Boston",
    city: "Boston",
    state: "MA",
  },
};

//Action
const STREET_UPDATED = "STREET_UPDATED";
function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

//Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

//STORE
const store = redux.createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(updateStreet("909 Las Vegas"));

unsubscribe();
