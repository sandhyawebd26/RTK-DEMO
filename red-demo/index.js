// Action
const redux = require('redux');
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;
const applyMiddleware= redux.applyMiddleware;

const reduxLogger=require("redux-logger");
const logger= reduxLogger.createLogger()

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}
function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// Reducer=>  (preState, action)=> newState
// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreames:20
// }

const initialCakeState = {
    numOfCakes: 10
};
const initialIceCreamState = {
    numOfIcecreames: 20
};

const CakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case ICECREAM_ORDERED: {
            return {
                ...state,
                numOfIcecreames: state.numOfIcecreames - action.payload
            }
        }
        case ICECREAM_RESTOCKED: {
            return {
                ...state,
                numOfIcecreames: state.numOfIcecreames + action.payload
            }
        }
        case CAKE_ORDERED:{
            return{
                ...state,
                numOfIcecreames: state.numOfIcecreames - 1
            }
        }
        default:
            return state
    }
}


//COMBINERED METHOD
const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})

//store
// const store = createStore(reducer);

// combineReducers method
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())


const unsubscribe = store.subscribe(()=>{});

store.dispatch(orderIceCream(4));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3))
store.dispatch(restockIceCream(5))

unsubscribe(restockCake);