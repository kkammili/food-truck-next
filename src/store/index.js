import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import cartReducer from './reducers/cartReducer';

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Persistor
export const persistor = persistStore(store);
