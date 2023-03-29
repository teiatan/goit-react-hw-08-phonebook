import * as contactsApi from 'service/mockapi';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        try {
            const contacts = await contactsApi.fetchContacts();
            return contacts; 
        }  catch(error) {
            console.log(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data) => {
        try {
           await contactsApi.addContact(data); 
        }  catch(error) {
            console.log(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/addContact',
    async () => {
        try {
           await contactsApi.deleteContact();
        }  catch(error) {
            console.log(error);
        }
    }
);