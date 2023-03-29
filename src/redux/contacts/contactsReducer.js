import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsActions from './contactsActions';
import { fetchContacts } from "./contactsOperations";

const items = createReducer([], {
[fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.rejected]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
})

export default combineReducers({
    items,
    isLoading,
    error,
})