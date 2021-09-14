import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import reducer from './reducer';

export default () => {
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);
  return { store, persistor };
};
