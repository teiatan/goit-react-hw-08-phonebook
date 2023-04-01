import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { filter } from './filterSlice.';
import { contacts } from './contactsSlice';
import { authReducer } from './authSlice';

export const store = configureStore({ 
    reducer: {
        contacts: contacts.reducer,
        filter: filter.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});


export const persistor = persistStore(store);