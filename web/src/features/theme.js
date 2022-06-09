import { createSlice }  from '@reduxjs/toolkit';


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: false
    },
    reducers: {
        themeChoice: (state, action) => {
            state.value = action.payload
        },
    }
});

export const {themeChoice} = themeSlice.actions;


export default themeSlice.reducer;