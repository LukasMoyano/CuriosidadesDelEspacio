import React from 'react';
import PropTypes from 'prop-types';

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

// Validación de tipos para las propiedades
QuoteBox.propTypes = {
  phrase: PropTypes.string.isRequired, // La propiedad 'phrase' debe ser un string y es requerida
  handleChangeQuote: PropTypes.func.isRequired, // La propiedad 'handleChangeQuote' debe ser una función y es requerida
};

export default QuoteBox;
