import { useState } from "react";
import { Section } from "components/Section/section";
import { Form, Label, Input, Button } from 'components/ContactForm/ContactForm.styled';

export function Login() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "login":
                setLogin(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        /* const existingContact = contacts.find((element) =>
            element.name === name
        );
        if(existingContact) {
        window.alert(`${name} is already in contacts`);
        return;
        };
        dispatch(addContact({name, number}));
         */
        resetForm();
    };

    const resetForm = () => {
        setLogin("");
        setPassword("");
    };

    return (
        <Section title="Log in">
            <Form onSubmit={handleSubmit}>
                <Label>
                    Login
                    <Input
                        type="text"
                        name="login"
                        required
                        value={login}
                        onChange={handleInputChange}
                    />
                </Label>
                
                <Label>
                    Password
                    <Input
                        type="text"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />
                </Label>  

                <Button type="submit">Sign in</Button>
            </Form>
        </Section>
    );  
};
