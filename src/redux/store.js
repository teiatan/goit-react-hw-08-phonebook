import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contacts, filter } from './slice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


const persistConfig = {
    key: 'contacts',
    storage,
};

const contactsReducer = persistReducer(
    persistConfig,
    contacts.reducer,
);

export const store = configureStore({ 
    reducer: {
        contacts: contactsReducer,
        filter: filter.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
});

export const persistor = persistStore(store);
