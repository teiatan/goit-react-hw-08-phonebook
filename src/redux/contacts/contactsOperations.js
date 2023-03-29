import * as contactsActions from './contactsActions';
import * as contactsApi from '../../service/mockapi';

export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest());

    try {
        const contacts = await contactsApi.fetchContacts();
        dispatch(contactsActions.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error));
    }
}