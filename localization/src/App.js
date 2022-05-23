import './App.css';
import { useState, useEffect } from 'react'

import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesaj" //paramtere geçmek
  },
  "en-US": {
    title: "Hello world",
    description: "{count} new messages"
  }
}

function App() {

  const defaultLocale = localStorage.getItem("locale") || navigator.language;
  console.log(defaultLocale)

  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <h1><FormattedMessage id='title' /></h1>

        <p>
          <FormattedMessage id='description' values={{ count: 4 }} />
        </p>

        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
