import { createSlice } from "@reduxjs/toolkit";
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
        [signUp.fulfilled]: (state) => state,
        [signUp.rejected]: (state) => state,
    },
})