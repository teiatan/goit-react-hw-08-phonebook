import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/reducers';
import { Label, Input } from "./Filter.styled";

export function Filter () {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const onChange = e => {
        dispatch(getFilter(e.currentTarget.value));
    }

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </Label>
    );
};