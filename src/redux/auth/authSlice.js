import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { signUp, signIn, signOut, getUserInfo } from "./authOperations";

/* const onPending = state => {
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
}; */

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
        },
        [signUp.rejected]: (state) => state,

        [signIn.pending]: (state) => state,
        [signIn.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [signIn.rejected]: (state) => state,

        [signOut.pending]: (state) => state,
        [signOut.fulfilled]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [signOut.rejected]: (state) => state,

        /* [getUserInfo.pending]: (state) => state.isRefreshing = true,
        [getUserInfo.fulfilled]: (state) => {
            state.isRefreshing = false;
        },
        [getUserInfo.rejected]: (state) => state.isRefreshing = false, */
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