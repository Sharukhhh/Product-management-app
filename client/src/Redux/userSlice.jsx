import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userCredentials : null
}

export const userDataSlice = createSlice({
    name : 'user',

    initialState,

    reducers : {
        setUserData : (state , action) => {
            state.userCredentials = action.payload
        },

        logout : (state) => {
            state.userCredentials = null;
        }
    }
});

export const {setUserData , logout} = userDataSlice.actions;

export default userDataSlice.reducer;