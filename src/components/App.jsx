import { useSelector, useDispatch } from "react-redux";
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts)

  return (
    <>
      <Section title="Phonebook">
        <ContactForm /* takeDataFromSubmitForm={takeDataFromSubmitForm} *//>
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
