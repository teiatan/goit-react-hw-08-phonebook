import { Notify } from "notiflix";
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'service/connectionsapi';

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data) => {
        try {
            const response = await api.signUp(data);
            Notify.success(`${response.user.name}, cogratulation! Now are signed up.`);
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
            const response = await api.signIn(data);
            Notify.success(`${response.user.name}, welcome back to your phonebook`);
            
            return response;  
        }  catch(error) {
            console.log(error);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signOut',
    async () => {
        try {
            await api.signOut();
            Notify.failure(`You are signed out. See you soon.`);
        }  catch(error) {
            console.log(error);
        }
    }
);

export const getUserInfo = createAsyncThunk(
    'auth/getUserInfo',
    async (data) => {
        try {
            await api.getUserInfo(data);
            return data; 
        }  catch(error) {
            console.log(error);
        }
    }
);