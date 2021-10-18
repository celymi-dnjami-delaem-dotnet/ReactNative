import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import authReducer from '../reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
});

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const middleware = applyMiddleware(createLogger(), sagaMiddleware);

    const store = createStore(persistedReducer, composeWithDevTools(middleware));

    const persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
};

export default configureStore;
