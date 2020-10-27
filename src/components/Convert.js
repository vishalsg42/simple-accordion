import React, { useState, useEffect } from "react";
import axios from 'axios';

const ConvertLanguage = ({ language, text }) => {

  const [translatedText, setTranslatedText] = useState('');
  const [debounceText, setDebounceText] = useState(text);


  useEffect(() => {

    const textTimer = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return () => {
      clearTimeout(textTimer);
    }
  }, [text]);

  // q=hello&source=en&target=hi&format=text&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
  useEffect(() => {

    const getTranslated = async () => {
      let translatedText = await axios.get('https://translation.googleapis.com/language/translate/v2', {
        params: {
          q: debounceText,
          source: 'en',
          target: language.value,
          key: process.env.REACT_APP_GOOGLE_API_KEY
        }
      })
      setTranslatedText(translatedText.data.data.translations[0].translatedText)
    }

    getTranslated();

  }, [language, debounceText]);

  return (

    <h1 className="ui header">{translatedText}</h1>
    // <div >Convert</div>
  )
}

export default ConvertLanguage;
