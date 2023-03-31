import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//operations with contacts

export async function fetchContacts() {
    const data = await axios.get('/contacts');
    return data;
};

export async function addContact({name, number}) {
    const data = await axios.post('/contacts', { name, number });
    return data;
};

export async function deleteContact(contactId) {
    const data = axios.delete(`/contacts/${contactId}`);
    return data;
};

export async function updateContact(contactId) {
    const data = axios.patch(`/contacts/${contactId}`);
    return data;
};

//operations with users

export async function signUp(credentials) {
    console.log(credentials);
    const data = await axios.post('/users/signup', credentials);
    console.log(data);
    return data;
};

export async function signIn({name, number}) {
    const data = await axios.post('/users/login', { name, number });
    return data;
};

export async function signOut({name, number}) {
    const data = await axios.post('/users/logout', { name, number });
    return data;
};

export async function getUserInfo() {
    const data = await axios.get('​/users​/current');
    return data;
};