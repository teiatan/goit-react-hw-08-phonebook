import * as contactsActions from './contactsActions';
import * as contactsApi from '../../service/mockapi';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest());
    try {
        const contacts = await contactsApi.fetchContacts();
        
        dispatch(contactsActions.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error));
    }
}; */

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await contactsApi.fetchContacts();
        return contacts; 
    }
)