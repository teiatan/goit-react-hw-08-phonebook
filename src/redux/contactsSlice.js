import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from "./contacts/contactsOperations";
//import { fetchContacts, addContact, deleteContact } from './operations';

export const contacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {

        [fetchContacts.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        [fetchContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        
        
        [fetchContacts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        /*




        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items.filter(contact => contact.name !== action.payload);
        }, */
    },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = contacts.actions;
export const { addContact, deleteContact } = contacts.actions;
export const contactsReducer = contacts.reducer;
