import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { signUp } from "./authOperations";

const onPending = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isRefreshing = false;
};

const onFulfilled = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isRefreshing = false;
};

const onRejected = (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isRefreshing = false;
};

export const auth = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [signUp.pending]: (state) => state,
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [signUp.rejected]: (state) => state,
    },
});


const persistConfig = {
    key: 'auth',
    storage,
};

export const authReducer = persistReducer(
    persistConfig,
    auth.reducer,
);