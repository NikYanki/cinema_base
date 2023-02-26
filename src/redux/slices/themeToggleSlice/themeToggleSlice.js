import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
};

const themeToggleSlice = createSlice({
    name: 'themeToggleSlice',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.darkMode = action.payload;
        }
    }
});

const {reducer: themeReducer, actions:{changeTheme}}=themeToggleSlice;

export {
    themeReducer,
    changeTheme
};
