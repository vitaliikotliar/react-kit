import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function () {
  // Create saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Create app store within redux dev tools, root reducer and saga middleware
  const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
  ));

  // Set runSaga as a store property
  store.runSaga = sagaMiddleware.run;

  // Save persistor
  const persistor = persistStore(store);

  return { store, persistor };
}
