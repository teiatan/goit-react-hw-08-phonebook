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



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm/>
      </Section>

      <Section title="Contacts">
        <Container>
          <Filter />
          <ContactList />
        </Container>
      </Section>

      {isLoading && <Loader />}
    </>
  );
};
