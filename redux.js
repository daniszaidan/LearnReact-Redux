const redux = require('redux');
const createStrore = redux.createStore;

const initialState = {
    value: 0,
    age: 20
}

// Reducer 
const rootReducer = (state = this.initialState, action) => { return state }

// Store
const store = createStrore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANE_VALUE', newValue: 12 });