import { useState } from "react"; // Importamos el Hook useState de React
import "./App.css"; // Importamos el archivo CSS de la aplicación
import dbQuotes from "./utilities/spaceCuriosities.json"; // Importamos el archivo JSON que contiene las curiosidades del espacio
import { getRandom } from "./components/random"; // Importamos la función getRandom del archivo random.js
import QuoteBox from "./db/QuoteBox"; // Importamos el componente QuoteBox del archivo QuoteBox.js

const backgrounds = ["bg1", "bg2", "bg3", "bg4"]; // Definimos una matriz con los nombres de las clases CSS para el fondo de la aplicación

function App() {
  // Definimos el componente principal de la aplicación

  const [quote, setQuote] = useState(getRandom(dbQuotes)); // Definimos el estado de la cita actual y su función de actualización utilizando el Hook useState
  const [bgImage, setBgImage] = useState(getRandom(backgrounds)); // Definimos el estado de la imagen de fondo actual y su función de actualización utilizando el Hook useState

  const handleChangeQuote = () => {
    // Definimos la función que se ejecuta cuando se hace clic en el botón de cambio de cita
    setQuote(getRandom(dbQuotes)); // Actualizamos el estado de la cita actual utilizando la función de actualización de useState
    setBgImage(getRandom(backgrounds)); // Actualizamos el estado de la imagen de fondo actual utilizando la función de actualización de useState
  };

  return (
    // Retornamos el contenido del componente App
    <main className={`app ${bgImage}`}>
      {" "}
      {/* Definimos la clase CSS para el fondo de la aplicación utilizando el estado de la imagen de fondo actual */}
      <section className="app__container">
        {" "}
        {/* Definimos la sección principal de la aplicación */}
        <h1 className="">
          Curiosidades del Espacio
        </h1>{" "}
        {/* Definimos el título principal de la aplicación */}
        <QuoteBox
          handleChangeQuote={handleChangeQuote}
          phrase={quote.phrase}
        />{" "}
        {/* Utilizamos el componente QuoteBox para mostrar la cita actual y el botón de cambio */}
        <footer className="">
          {" "}
          {/* Definimos el pie de página de la aplicación */}
          <h3 className="">Fuente: {quote.author}</h3>{" "}
          {/* Mostramos el autor de la cita actual */}
        </footer>
      </section>
    </main>
  );
}

export default App; // Exportamos el componente App como el componente predeterminado de la aplicación
