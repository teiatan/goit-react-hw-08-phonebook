import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
//import { useSelector } from 'react-redux';

export const App = () => {

/*   const contacts = useSelector(state => state.contacts);
  console.log(contacts); */

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
    </>
  );
};
