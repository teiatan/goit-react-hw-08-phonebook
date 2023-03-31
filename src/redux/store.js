import { configureStore } from '@reduxjs/toolkit';
import { filter } from './filterSlice.';
import { contacts } from './contactsSlice';
import { auth } from './authSlice';

export const store = configureStore({ 
    reducer: {
        contacts: contacts.reducer,
        filter: filter.reducer,
        auth: auth.reducer,
    }
});


