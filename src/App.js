import './App.css';
import {initReactI18next, useTranslation} from "react-i18next";
import {useState} from "react";
import {i18n} from './i18n';

function App() {
  const {t} = useTranslation();
  const [clicked, setClicked] = useState(false);

  const langChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setClicked(false);
  }

  const btnClick = () => {
    setClicked(true);
  }

  return (
      <>
        <div className="form">
          <div>
            <label>{t('languageSelect')}</label>
            <select name="language" onChange={langChange}>
              <option value="en">{t('englishLanguage')}</option>
              <option value="fra">{t('frenchLanguage')}</option>
            </select>
          </div>
          <div className="button">
            <button onClick={btnClick}>{t('sayHelloButton')}</button>
          </div>
        </div>
        <div className="output">
          {clicked == true && <h1>{t('helloWorldLabel')}</h1>}
        </div>
      </>

  );
}

export default App;
