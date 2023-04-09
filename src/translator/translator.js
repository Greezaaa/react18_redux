import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTranslation, setLanguage } from "./reducer";

export const TranslatorApp = () => { 


  const dispatch = useDispatch(); //translator parts para cambiar el valor de la variable language
  const translation = useSelector(selectTranslation); //translator parts para mostrar el valor de la variable language

  const handleLanguageChange = (language) => { //translator parts
    dispatch(setLanguage(language)); //translator parts
  }; //translator parts

  return (
    <>
      <button onClick={() => handleLanguageChange("en")} disabled={translation.language === 'en'}>en</button>
      <button onClick={() => handleLanguageChange("es")} disabled={translation.language === 'es'}>es</button>
      <button onClick={() => handleLanguageChange("fr")} disabled={translation.language === 'fr'}>fr</button>
      <button onClick={() => handleLanguageChange("uk")} disabled={translation.language === 'uk'}>uk</button>
      <h2>{translation.headerText}</h2>
      <p>{translation.mainText}</p>
      <p>{translation.footerText}</p>
    </>
  );
};