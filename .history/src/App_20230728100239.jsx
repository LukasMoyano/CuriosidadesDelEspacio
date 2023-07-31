import React, { useState } from 'react';
import dbQuotes from './utilities/spaceCuriosities.json';
import QuoteBox from './db/QuoteBox';

const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4'];

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes));
  const [bgImage, setBgImage] = useState(getRandom(backgrounds));

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes));
    setBgImage(getRandom(backgrounds));
  };

  return (
    <main className={`app ${bgImage}`}>
      <section className="app__container">
        <h1 className="text-center text-4xl font-bold">Curiosidades del Espacio</h1>
        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />
        <footer>
          <h3 className="text-center text-lg">Fuente: {quote.author}</h3>
        </footer>
      </section>
    </main>
  );
}

export default App;
