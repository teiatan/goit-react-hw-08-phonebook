import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { isLoadingSelector, isLoggedInSelector, isRefreshingSelector } from 'redux/selectors';
import { Section } from "components/Section/section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Container } from "components/App.styled";
import { Loader } from "components/Loader/Loader";
import { useNavigate } from 'react-router-dom';



export const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(isLoadingSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const isRefreshing = useSelector(isRefreshingSelector);

  useEffect(()=> {
    if(!isRefreshing){
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshing]);

  /* useEffect(()=> {
    if(!isLoggedIn) {
      navigate('/', {replace: true});
    };
  }) */

  return (
    <>
      {isLoggedIn && !isRefreshing &&
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
      </>
      }
      {isLoading && <Loader />}
    </>
  );
};
