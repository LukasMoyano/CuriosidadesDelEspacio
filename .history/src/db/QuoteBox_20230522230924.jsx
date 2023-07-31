import React from 'react';
import "../components/style/QuoteBox.css";

function QuoteBox({ phrase, handleChangeQuote }) {
  return (
    <section className="quoteBox">
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
        Cita del día
      </button>
      <article className="quoteBox__phrase">
        <p>{phrase}</p>
      </article>
    </section>
  );
}

export default QuoteBox;