const store = require('./app/store')
// const { icecreamActions } = require('./features/icecream/icecreamSlice')
// const { cakeActions } = require('./features/cake/cakeSlice')
const { userActions, fetchUsers } = require('./features/user/userSlice')

console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(4));
store.dispatch(fetchUsers())



// unsubscribe()