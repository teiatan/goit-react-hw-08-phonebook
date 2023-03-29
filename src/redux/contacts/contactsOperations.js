import * as contactsActions from './contactsActions';
import * as contactsApi from '../../service/mockapi';

export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest());
    console.log('works');
    try {
        const contacts = await contactsApi.fetchContacts();
        
        dispatch(contactsActions.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error));
    }
}