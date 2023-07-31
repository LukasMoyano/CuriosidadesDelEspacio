import { useState } from "react";
import "./App.css";
import dbQuotes from "./utilities/spaceCuriosities.json";
import { getRandom } from "./components/random";
import QuoteBox from "./db/QuoteBox";

const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  // Definimos el componente principal de la aplicación

  // Definimos el estado de la cita actual y su función de actualización utilizando el Hook useState
  const [quote, setQuote] = useState(getRandom(dbQuotes));

  // Definimos el estado de la imagen de fondo actual y su función de actualización utilizando el Hook useState
  const [bgImage, setBgImage] = useState(getRandom(backgrounds));

  const handleChangeQuote = () => {
    // Definimos la función que se ejecuta cuando se hace clic en el botón de cambio de cita
    setQuote(getRandom(dbQuotes)); // Actualizamos el estado de la cita actual utilizando la función de actualización de useState
    setBgImage(getRandom(backgrounds)); // Actualizamos el estado de la imagen de fondo actual utilizando la función de actualización de useState
  };

  return (
    <main className={`app ${bgImage}`}>
      {" "}
      <section className="app__container">
        <h1 className="">Curiosidades del Espacio</h1>
        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />
        <footer className="">
          <h3 className="quote__author">Fuente: {quote.author}</h3>{" "}
        </footer>
      </section>
    </main>
  );
}

export default App;
