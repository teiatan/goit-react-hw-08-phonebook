import { useSelector, useDispatch } from "react-redux";
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
//import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
import { addContact } from "redux/store";

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm takeDataFromSubmitForm={dispatch(addContact)}/>
      </Section>

      <Section title="Contacts">
        <Container>
          {/* <Filter getFilterRequest={getFilterRequest}/> */}
          <ContactList
            contacts={contacts} 
            /* deleteContact={deleteContact} */>
          </ContactList>
        </Container>
      </Section>
    </>
  );
};
