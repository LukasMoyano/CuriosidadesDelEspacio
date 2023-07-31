import React from "react"; // Importamos la biblioteca de React
import "../components/style/QuoteBox.css"; // Importamos el archivo CSS del componente

function QuoteBox({ phrase, handleChangeQuote }) { // Definimos el componente QuoteBox y sus propiedades
  return ( // Retornamos el contenido del componente
    <section className="QuoteBox"> {/* Definimos la sección principal del componente */}
      <article className="quoteBox__phrase"> {/* Definimos el artículo que muestra la curiosidad del espacio */}
        <p>{phrase}</p> {/* Mostramos la curiosidad del espacio actual */}
      </article>
      <button className="quoteBox__btn" onClick={handleChangeQuote}> {/* Definimos el botón de cambio de cita */}
        Cita del día
      </button>
    </section>
  );
}

export default QuoteBox // Exportamos el componente QuoteBox como el componente predeterminado