import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        getInTheSystem: (state) => {
            state.loggedIn = true;
        },
        getOuttaTheSystem: (state) => {
            state.loggedIn = false;
        }
    }
})

export const {getInTheSystem, getOuttaTheSystem} = loginSlice.actions;

const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    },
});


export type RootState = ReturnType<typeof store.getState>
export default store