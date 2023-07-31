// Agrega las funciones de Tailwind CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

import React, { useState } from 'react';
import './App.css';
import dbQuotes from './utilities/spaceCuriosities.json';
import { getRandom } from "./components/random";
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
      <section className="app__container px-4 py-8 lg:px-0 lg:w-1/2 lg:m-auto">
        <h1 className="text-center text-4xl font-bold text-black">Curiosidades del Espacio</h1>
        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />
        <footer className="lg:flex lg:justify-center">
          <h3 className="text-center text-lg text-black">Fuente: {quote.author}</h3>
        </footer>
      </section>
    </main>
  );
}

export default App;
