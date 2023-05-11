import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../utils/Axios";

export const login = createAsyncThunk('login', async ({ password, email }) => {
    try {
        const res = await Axios.post('login.php', JSON.stringify({ email: email, password: password }))
        if (res.data.error)
            return false
        else
            return res.data.data
    } catch (e) {
        console.log('something went wrong while logging you in', e)
        return false
    }
})

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userData: { id: 2, name: 'rohit' },
        isLoading: false,
        error: false
    },
    reducers: {
        logout(state, action) {
            localStorage.clear();
            state.userData = null;
            state.isLoggedIn = false
        },
        getLocalUser(state, action) {
            localStorage.setItem('user', action.payload)
            state.userData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload == false)
                state.error = true
            else {
                state.userData = action.payload

            }
        });
    }

})
export const { logout } = AuthSlice.actions
export default AuthSlice.reducer