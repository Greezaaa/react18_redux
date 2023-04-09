import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTranslation, setLanguage, selectLanguage } from "../translator/reducer";
export const Header = () => {

    const dispatch = useDispatch();
    const translation = useSelector(selectTranslation);
    const language = useSelector(selectLanguage);

    const handleLanguageChange = (language) => {
        dispatch(setLanguage(language));
        document.documentElement.lang = language;
    };

    return (
        <>
            <h1>
                {translation.headerText}
            </h1>
            <h2>
                {translation.headerText2} + {language}
            </h2>

            <button onClick={() => handleLanguageChange("en")} disabled={language === 'en'}>en</button>
            <button onClick={() => handleLanguageChange("es")} disabled={language === 'es'}>es</button>
            <button onClick={() => handleLanguageChange("fr")} disabled={language === 'fr'}>fr</button>
            <button onClick={() => handleLanguageChange("uk")} disabled={language === 'uk'}>uk</button>

        </>
    )
}
