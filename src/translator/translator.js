import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTranslation, setLanguage } from "./reducer";

export const TranslatorApp = () => { 
  const dispatch = useDispatch();
  const translation = useSelector(selectTranslation);

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <>
      <button onClick={() => handleLanguageChange("en")} disabled={translation.language === 'en'}>en</button>
      <button onClick={() => handleLanguageChange("es")} disabled={translation.language === 'es'}>es</button>
      <button onClick={() => handleLanguageChange("fr")} disabled={translation.language === 'fr'}>fr</button>
      <button onClick={() => handleLanguageChange("ua")} disabled={translation.language === 'ua'}>ua</button>
      <h2>{translation.headerText}</h2>
      <p>{translation.mainText}</p>
      <p>{translation.footerText}</p>
    </>
  );
};