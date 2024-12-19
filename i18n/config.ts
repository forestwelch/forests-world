import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import de from "./lang/de.json";
import ja from "./lang/ja.json";
import ko from "./lang/ko.json";
import es from "./lang/es.json";
import zh from "./lang/zh.json";
import hi from "./lang/hi.json";
import ar from "./lang/ar.json";
import ru from "./lang/ru.json";
import pt from "./lang/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    ja: { translation: ja },
    ko: { translation: ko },
    es: { translation: es },
    zh: { translation: zh },
    hi: { translation: hi },
    ar: { translation: ar },
    ru: { translation: ru },
    pt: { translation: pt },
  },
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
