import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import authReducer from '../reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const rootReducer = combineReducers({
    auth: authReducer,
});

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(createLogger(), sagaMiddleware);

    const store = createStore(rootReducer, composeWithDevTools(middleware));

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
