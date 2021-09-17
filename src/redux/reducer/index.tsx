import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
});

export default reducer;
