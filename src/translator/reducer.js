import { createSlice } from '@reduxjs/toolkit';
import {initialState} from './translates';


export const translatorSlice = createSlice({
    name: 'translator',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const { setLanguage } = translatorSlice.actions;

export const selectLanguage = state => state.translator.language;

export const selectTranslation = state => {
    const language = state.translator.language;
    return state.translator.translations[language];
};

export default translatorSlice.reducer;