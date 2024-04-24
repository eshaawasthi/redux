const redux = require("redux");
const createStore = redux.createStore;

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Actions
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
    loading: true,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    error: error,
  };
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

//store
const store = createStore(reducer);
