import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
//import rootReducer from './reducers';
const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const filter = createAction('contacts/filter');

const getFilter = createAction('filter/getFilter');

const contactsReducer = createReducer([
    {name: 'Rosie Simpson', number: '459-12-56'},
    {name: 'Hermione Kline', number: '443-89-12'},
    {name: 'Eden Clements', number: '645-17-79'},
    {name: 'Annie Copeland', number: '227-91-26'},
  ], {
    [addContact]: (state, action) => state,
    [deleteContact]: (state, action) => state,
    [filter]: (state, action) => state,

  });

  const filterReducer = createReducer("", {
    [getFilter]: (state, action) => state,

  })

export const store = configureStore({ reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
} });