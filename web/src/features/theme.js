import { createSlice }  from '@reduxjs/toolkit';


const localStorageTheme = localStorage.getItem('Theme');
const localTheme = (localStorageTheme === 'true');

console.log(localTheme)
console.log(typeof(localTheme))


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: localStorageTheme !== null?localTheme:false
    },
    reducers: {
        themeChoice: (state, action) => {
            state.value = action.payload
        },
    }
});

export const {themeChoice} = themeSlice.actions;


export default themeSlice.reducer;