import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({});

const configureStore = () => {
    const middleware = applyMiddleware(createLogger());

    const store = createStore(rootReducer, middleware);

    return store;
};

export default configureStore;
