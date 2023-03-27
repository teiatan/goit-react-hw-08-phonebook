import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';

export function ContactItem({name, number}) {
    const dispatch = useDispatch();

    return (
        <Item>{name}: <Span>{number}</Span>
            <Button type='button' onClick={() => {dispatch(deleteContact(name))}}>Delete</Button>
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
