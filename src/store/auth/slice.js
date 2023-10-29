import { handlePending, handleRejected, handleFulfilled } from "./helpers";

const { createSlice } = require("@reduxjs/toolkit")
const { registrateThunk, authThunk, logoutThunk, loginThunk } = require("./actions")

const initialState = {
    name: '',
    email: '',
    isAuth: false,
    token: '',
    err: '',
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(registrateThunk.fulfilled, (state, {payload}) => {
            state.name = payload.user.name
            state.email = payload.user.email
            state.isAuth = true
        })
        .addCase(authThunk.fulfilled, (state, {payload}) => {
            state.name = payload.name
            state.email = payload.email
            state.isAuth = true
        })
        .addCase(logoutThunk.fulfilled, (state, {payload}) => {
            state.name = ''
            state.email = ''
            state.isAuth = false
        })
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.name = payload.user.name
            state.email = payload.user.email
            state.isAuth = true
        })
        .addMatcher(action => action.type.endsWith('/pending'), handlePending)
        .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
        .addMatcher(
            action => action.type.endsWith('/fulfilled'),
            handleFulfilled
        );
    }
})

export const authReducer = authSlice.reducer