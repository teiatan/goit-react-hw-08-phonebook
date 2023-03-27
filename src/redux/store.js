import { configureStore } from '@reduxjs/toolkit';
import { contacts, filter } from './reducers';

export const store = configureStore({ reducer: {
    contacts: contacts.reducer,
    filter: filter.reducer,
} });