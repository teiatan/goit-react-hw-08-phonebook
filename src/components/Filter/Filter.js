import { useState, useEffect } from 'react';
import { Label, Input } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/store';

export function Filter () {

    //const [value, setValue] = useState("");

    /* useEffect(()=>{
        getFilterRequest(value);
    }, [value, getFilterRequest]); */
    const value = useSelector(state => state.filter);
    const dispatch = useDispatch();
    /* const onChange = e => {
        setValue(e.currentTarget.value);
    }; */

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={value}
                onChange={e=>dispatch(getFilter(e.currentTarget.value))}
            />
        </Label>
    );
};