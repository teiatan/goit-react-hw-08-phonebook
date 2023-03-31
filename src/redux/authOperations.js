import { Notify } from "notiflix";
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'service/connectionsapi';

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data) => {
        try {
            const response = await api.signUp(data);
            Notify.success(`{data.name}, cogratulation! Now are signed up.`);
            console.log(response);
            return response; 
        }  catch(error) {
            console.log(error);
        }
    }
);

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (data) => {
        try {
            const contacts = await api.signIn(data);
            Notify.success(`{data.name}, welcome back to your phonebook`);
            return contacts;  
        }  catch(error) {
            console.log(error);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signOut',
    async (data) => {
        try {
            await api.signOut(data.id);
            Notify.failure(`{data.name}, you are signed out. See you soon.`);
            return data.id; 
        }  catch(error) {
            console.log(error);
        }
    }
);

export const getUserInfo = createAsyncThunk(
    'auth/getUserInfo',
    async (data) => {
        try {
            await api.getUserInfo(data.id);
            return data.id; 
        }  catch(error) {
            console.log(error);
        }
    }
);