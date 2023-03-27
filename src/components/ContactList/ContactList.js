import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';
import { useSelector } from 'react-redux';

export function ContactList() {

    const contacts = useSelector(state => state.contacts);

    return (
        <ContactListEl>
            {contacts.map((contact) => {
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