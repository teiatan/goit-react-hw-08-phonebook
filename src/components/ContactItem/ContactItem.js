import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Button, Span } from './ContactItem.styled';

export function ContactItem({name, number}) {
   
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteContact(name));
        Notify.failure(`${name} is deleted from your contact list`);
    };

    return (
        <Item>{name}: <Span>{number}</Span>
            <Button type='button' onClick={onClick}>Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}
