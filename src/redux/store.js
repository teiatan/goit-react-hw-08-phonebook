import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { filter } from './filterSlice.';
import { contactsReducer } from './contactsSlice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

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

