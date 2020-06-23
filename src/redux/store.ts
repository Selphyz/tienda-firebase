import { createStore, applyMiddleware, compose, Store } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export const persistor = persistStore(store);
