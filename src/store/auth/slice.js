const { createSlice } = require("@reduxjs/toolkit")
const { registrateThunk } = require("./actions")

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
        .addCase(registrateThunk.pending, (state, _)=>{
            state.isLoading = true
        })
        .addCase(registrateThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false
            console.log(payload)
        })
        .addCase(registrateThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.err = payload
        })
    }
})

export const authReducer = authSlice.reducer