import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
//import * as contactsSelectors from '../../redux/contacts/contactsSelectors';
//import * as contactsOperations from '../../redux/contacts/contactsOperations';

export function ContactList() {

    const contacts = useSelector(contactsSelectors.contacts);
    const filter = useSelector(state => state.filter);
    const visibleContacts = contacts.filter(element => element.name.toLowerCase().includes(filter));
    const dispatch = useDispatch();
 
    useEffect(()=> {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <ContactListEl>
            {visibleContacts.map((contact) => {
                    return (
                        <ContactItem 
                            key={contact.name}
                            name={contact.name}
                            number={contact.number}
                        />
                    );
                })}                
        </ContactListEl>
    );
};