import { createSlice } from '@reduxjs/toolkit';

export const contacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            {name: 'Rosie Simpson', number: '459-12-56'},
            {name: 'Hermione Kline', number: '443-89-12'},
            {name: 'Eden Clements', number: '645-17-79'},
            {name: 'Annie Copeland', number: '227-91-26'},
        ],
        isLoading: false,
        error: null,
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items.filter(contact => contact.name !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contacts.actions;
