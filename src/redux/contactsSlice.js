import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
    contacts: [
        {name: 'Rosie Simpson', number: '459-12-56'},
        {name: 'Hermione Kline', number: '443-89-12'},
        {name: 'Eden Clements', number: '645-17-79'},
        {name: 'Annie Copeland', number: '227-91-26'},
    ],
  };

export const contacts = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContact(state, action) {
            const { name, number } = action.payload;
            state.contacts.push({name, number});
        },
        deleteContact(state, action) {
            return {contacts: state.contacts.filter(contact => contact.name !== action.payload)};
        },
    },
});
export const { addContact, deleteContact } = contacts.actions;