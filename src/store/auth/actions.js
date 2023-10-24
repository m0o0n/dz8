const { createAsyncThunk } = require("@reduxjs/toolkit");
const { registrate } = require("api/user");

export const registrateThunk = createAsyncThunk(
    'auth/registrate',
    async (formData, thunkAPI) => {
        try {
            const {data} = await registrate(formData)
            console.log(data)
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)