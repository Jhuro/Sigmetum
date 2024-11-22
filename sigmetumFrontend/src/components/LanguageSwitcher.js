import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonPrincipal from './ButtonPrincipal';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    setDropdownOptions([
      t('language.spanish'),
      t('language.english'),
    ]);
  }, [t]);

  const changeLanguage = (selectedOption) => {
    const langCode = selectedOption.includes(t('language.spanish')) ? "es" : "en";
    i18n.changeLanguage(langCode);
  };

  return (
    <ButtonPrincipal
      icon="Language"
      dropdownOptions={dropdownOptions}
      onOptionSelect={changeLanguage}
    />
  );
};

export default LanguageSwitcher;