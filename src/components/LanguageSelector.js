// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../style.css"
import usa from "../Assets/usa.png"
import argentina from "../Assets/argentina.png"

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        <img
          src={usa}
          alt="English"
          style={{ width: '30px', marginRight: '5px' }}
        />
      </button>
      <button onClick={() => changeLanguage('es')}>
        <img
          src={argentina}
          alt="Español"
          style={{ width: '30px', marginRight: '5px' }}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
