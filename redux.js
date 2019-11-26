const redux = require('redux');
const createStrore = redux.createStore;

const initialState = {
    value: 0,
    age: 20
}

// Reducer 
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

// Store
const store = createStrore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('store change : ', store.getState());

})

// Dispatching Action
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANE_VALUE', newValue: 12 });
console.log(store.getState());