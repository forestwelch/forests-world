import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const fromLanguage = i18n.language;
  const toLanguage = fromLanguage === "en" ? "fr" : "en";

  return (
    <a
      className="language-toggle inline-block p-1.5 m-2 text-md font-light relative transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={() => changeLanguage(toLanguage)}
    >
      {fromLanguage.toUpperCase()}
    </a>
  );
};

export default LanguageToggle;
