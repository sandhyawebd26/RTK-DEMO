const redux= require('redux')
const produce= require('immer').produce
const { createStore } = require("redux");


const initialState = {
    name: 'sandhya',
    address: {
        street: '123 shree nagar',
        city: 'indore',
        state: 'mp'
    }
}

const STREET_UPDATED = 'UPDATED_STREET';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     },

            // }
            return produce(state, (draft)=>{
                draft.address.street= action.payload

            })
        default: {
            return state
        }
    }
}

const store=redux.createStore(reducer);
console.log("initial state", store.getState())

const unsubscribe= store.subscribe(()=>{
    console.log("updated state", store.getState())
})

store.dispatch(updateStreet('129, bicholi mardana'))

unsubscribe();