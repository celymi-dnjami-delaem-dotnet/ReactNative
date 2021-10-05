import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import authReducer from '../reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    auth: authReducer,
});

const configureStore = () => {
    const middleware = applyMiddleware(createLogger());

    const store = createStore(rootReducer, composeWithDevTools(middleware));

    return store;
};

export default configureStore;
