import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const getFilter = createAction('filter/getFilter');

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [
        {name: 'Rosie Simpson', number: '459-12-56'},
        {name: 'Hermione Kline', number: '443-89-12'},
        {name: 'Eden Clements', number: '645-17-79'},
        {name: 'Annie Copeland', number: '227-91-26'},
    ],
    reducers: {
        addContact(state, action) {
            return [...state, {name: action.payload.name, number: action.payload.number}]
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.name !== action.payload)
        },
    },
});


export const { addContact, deleteContact } = contactsSlice.actions;

const filterReducer = createReducer("", {
    [getFilter]: (state, action) => action.payload,
})

export const store = configureStore({ reducer: {
    contacts: contactsSlice.reducer,
    filter: filterReducer,
} });