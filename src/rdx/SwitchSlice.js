import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
};

const SwitchSlice = createSlice({
    name: 'switch',
    initialState,
    reducers: {
        ToggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { ToggleTheme } = SwitchSlice.actions;
export default SwitchSlice.reducer;