// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../style.css"

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        <img
          src="https://images.vexels.com/media/users/3/164649/isolated/lists/010f55d9bb5f8a28c3620583482d89ed-circulo-de-icono-de-idioma-de-bandera-de-estados-unidos.png"
          alt="English"
          style={{ width: '30px', marginRight: '5px' }}
        />
      </button>
      <button onClick={() => changeLanguage('es')}>
        <img
          src="https://i.pinimg.com/originals/e5/9b/e8/e59be84c157b5a4af7e1f3709d4aad8d.png"
          alt="Español"
          style={{ width: '30px', marginRight: '5px' }}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
