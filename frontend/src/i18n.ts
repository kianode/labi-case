import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definiera dina översättningar
const resources = {
  en: {
    translation: {
      caseNumber: 'Case Number',
      caseType: 'Case Type',
      priority: 'Priority',
      save: 'Save',
      selectType: 'Select type',
      selectPriority: 'Select priority',
      // Lägg till fler översättningar här
    },
  },
  sv: {
    translation: {
      caseNumber: 'Ärendenummer',
      caseType: 'Ärendetyp',
      priority: 'Prioritet',
      save: 'Spara',
      selectType: 'Välj typ',
      selectPriority: 'Välj prioritet',
      // Lägg till fler översättningar här
    },
  },
};

i18n
  .use(initReactI18next) // kopplar ihop i18next med React
  .init({
    resources,
    lng: 'en', // standard-språk
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React gör redan escaping
    },
  });

export default i18n;
