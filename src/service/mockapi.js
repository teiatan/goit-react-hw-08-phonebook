import axios from 'axios';

axios.defaults.baseURL = 'https://6422294686992901b2c30e7a.mockapi.io/contacts';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact({name, number}) {
    console.log(name, number);
    const { data } = await axios.post('/contacts', { name, number });
    //console.log(data);
    return data;
};

export async function deleteContact(contactId) {
    const { data } = axios.delete(`/contacts/${contactId}`);
    return data;
};