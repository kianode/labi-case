import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('sv')}>Svenska</Button>
    </div>
  );
};

export default LanguageSwitcher;
