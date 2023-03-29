import { configureStore } from '@reduxjs/toolkit';
import { filter } from './filterSlice.';
//import { contacts } from './contactsSlice';
import contactsReducer from './contacts/contactsReducer';

export const store = configureStore({ 
    reducer: {
        contacts: contactsReducer,
        filter: filter.reducer,
    }
});


