import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { countReducer, userReducer } from './reducer'

const allReducers = combineReducers({
    counter:countReducer,
    user:userReducer
})
function initializeStore(state) {
    const store = createStore(
        allReducers,
        Object.assign({},state), 
        composeWithDevTools(applyMiddleware(ReduxThunk))
    );
    return store;
}

export default initializeStore;