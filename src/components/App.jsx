import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { isLoadingSelector } from 'redux/selectors';
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
import { Loader } from "./Loader/Loader";
import { Contacts } from 'pages/Contacts';



export const App = () => {
  
  return (
    <>
      <Contacts />
    </>
  );
};
