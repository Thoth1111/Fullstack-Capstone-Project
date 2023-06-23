import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import { vespaApi } from './vespaAPI';
import { reservationApi } from './reservationAPI';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    [vespaApi.reducerPath]: vespaApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
    .concat(vespaApi.middleware)
    .concat(reservationApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
