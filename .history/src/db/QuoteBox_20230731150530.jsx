import React from "react";

// Definimos el componente QuoteBox y sus propiedades
function QuoteBox({ phrase, handleChangeQuote }) {
  return (
    <section className="QuoteBox">
      <article className="quoteBox__phrase">
        <p>{phrase}</p>
      </article>
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
        Cita del día
      </button>
    </section>
  );
}

export default QuoteBox;
