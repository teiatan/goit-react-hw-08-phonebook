import { useState } from "react";
import { Section } from "components/Section/section";
import { Form, Label, Input, Button } from 'components/ContactForm/ContactForm.styled';

export function Register() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "login":
                setLogin(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Password confiramation has an error");
            return;
        }
        resetForm();
    };

    const resetForm = () => {
        setLogin("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <Section title="Registration">
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

                <Label>
                    Confirm Password
                    <Input
                        type="text"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={handleInputChange}
                    />
                </Label>  

                <Button type="submit">Sign up</Button>
            </Form>
        </Section>
    );  
};
