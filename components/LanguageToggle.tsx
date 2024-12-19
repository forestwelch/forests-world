import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  const languages = [
    "en",
    "es",
    "pt",
    "fr",
    "de",
    "ru",
    "ja",
    "ko",
    "zh",
    "hi",
    "ar",
  ];
  const currentLanguageIndex = languages.indexOf(i18n.language);

  useEffect(() => {
    setVisible(true);
  }, [i18n.language]);

  const changeLanguage = () => {
    const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextLanguageIndex]);
  };

  return (
    <a
      className="language-toggle inline-block p-1.5 m-2 text-md font-light relative transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={changeLanguage}
    >
      {i18n.language.toUpperCase()}
    </a>
  );
};

export default LanguageToggle;
