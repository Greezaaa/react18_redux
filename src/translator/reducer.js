import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'ua',
    translations: {
        en: {
            headerText: "This is header text",
            footerText: "This is footer text",
            mainText: "This is main text"
        },
        es: {
            headerText: "Este es el texto del encabezado",
            footerText: "Este es el texto del pie de página",
            mainText: "Este es el texto principal"
        },
        fr: {
            headerText: "Ceci est le texte d'en-tête",
            footerText: "Ceci est le texte de pied de page",
            mainText: "Ceci est le texte principal"
        },
        ua: {
            headerText: "Це текст заголовка",
            footerText: "Це текст нижнього колонтитулу",
            mainText: "Це основний текст"
        }
    }
};

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

export const selectTranslation = state => {
    const language = state.translator.language;
    return state.translator.translations[language];
};

export default translatorSlice.reducer;