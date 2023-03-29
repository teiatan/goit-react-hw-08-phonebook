import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';
import { useEffect } from 'react';
import { contactsSelector, filterSelector } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export function ContactList() {

    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
    const visibleContacts = contacts.filter(element => element.name.toLowerCase().includes(filter));

    useEffect(()=> {
        dispatch(fetchContacts());
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