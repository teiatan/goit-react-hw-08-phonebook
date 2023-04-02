import { createSlice } from "@reduxjs/toolkit";
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
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        
        [signIn.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        
        [signOut.fulfilled]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        
        [getUserInfo.pending]: (state) => state.isRefreshing = true,
        [getUserInfo.fulfilled]: (state, action) => {
            state.isRefreshing = false;
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [getUserInfo.rejected]: (state) => state.isRefreshing = false,
    },
});