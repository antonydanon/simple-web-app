import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {english} from "./languages/english"
import {french} from "./languages/french"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: english},
            fra: {translation: french}
        },
        lang: "en",
        fallbackLng: "en",
        interpolation: {escapeValue: false}
    });

export {i18n};