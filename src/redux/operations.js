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
            const contacts = await contactsApi.addContact(data);
            return contacts;  
        }  catch(error) {
            console.log(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (data) => {
        try {
            await contactsApi.deleteContact(data);
            return data; 
        }  catch(error) {
            console.log(error);
        }
    }
);