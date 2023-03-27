import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
//import rootReducer from './reducers';
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const getFilter = createAction('filter/getFilter');

const contactsReducer = createReducer([
        {name: 'Rosie Simpson', number: '459-12-56'},
        {name: 'Hermione Kline', number: '443-89-12'},
        {name: 'Eden Clements', number: '645-17-79'},
        {name: 'Annie Copeland', number: '227-91-26'},
    ], {
        [addContact]: (state, action) => [...state, {name: action.payload.name, number: action.payload.number}],
        [deleteContact]: (state, action) => state.filter(contact => contact.name !== action.payload),
    }
);

const filterReducer = createReducer("", {
    [getFilter]: (state, action) => action.payload,
})

export const store = configureStore({ reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
} });