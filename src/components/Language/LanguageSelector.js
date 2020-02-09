import React, { useContext } from 'react';
import { languageOptions } from './languages';
import { LanguageContext } from './LanguageProvider';
import Select from 'react-styled-select'

export default function LanguageSelector() {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (value) => {
        const selectedLanguage = languageOptions.find(item => item.id === value);
        languageContext.setLanguage(selectedLanguage);
    };

    console.log(languageContext.language.id)

    return (
        <Select
            onChange={handleLanguageChange}
            value={languageContext.language.id}
            options={languageOptions}
            searchable={false}
        />
    );
};