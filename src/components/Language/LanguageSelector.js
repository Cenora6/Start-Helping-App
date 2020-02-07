import React, { useContext, useState } from 'react';
import { languageOptions } from './languages';
import { LanguageContext } from './LanguageProvider';
import Select from 'react-styled-select'

export default function LanguageSelector() {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (value) => {
        const selectedLanguage = languageOptions.find(item => item.id === value);
        languageContext.setLanguage(selectedLanguage);
    };

    return (
        <Select
            onChange={handleLanguageChange}
            value={languageContext.language.id}
            options={languageOptions}
            classes={{
                selectValue: 'my-custom-value',
                selectArrow: 'my-custom-arrow'
            }}
        />

    );
};