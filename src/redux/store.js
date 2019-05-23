import { createStore, applyMiddleware, combineReducers } from "redux";
// Logger with default options
import logger from "redux-logger";
import reducer from "./reducers";
//combine formReducer with all application's reducers
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    reducer,
    form: formReducer
})

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(logger));
    return store;
}
