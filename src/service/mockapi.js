import axios from 'axios';

axios.defaults.baseURL = 'https://6422294686992901b2c30e7a.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact({name, phone}) {
    const { data } = await axios.post('/contacts', { name, phone });
    return data;
};

export async function deleteContact(contactId) {
    const { data } = axios.delete(`/contacts/${contactId}`);
    return data;
};