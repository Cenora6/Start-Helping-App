import React, { useState, createContext, useContext } from 'react';
import { languageOptions, dictionaryList } from './languages';

export const LanguageContext = createContext({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
});

export function LanguageProvider(props) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
    const [dictionary, setDictionary] = useState(languageContext.dictionary);
    console.log(languageContext.language)
    console.log(languageContext.dictionary)
    return (
        <LanguageContext.Provider value={{
            language,
            dictionary,
            setLanguage: (selectedLanguage) => {
                setLanguage(selectedLanguage);
                setDictionary(dictionaryList[selectedLanguage.id]);
            }
        }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export function Text(props) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[props.tid];
}