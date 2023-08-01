import PropTypes from 'prop-types';

function QuoteBox({ phrase, handleChangeQuote }) {
  // Add the `phrase` prop type
  const propTypes = {
    phrase: PropTypes.string.isRequired,
  };

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

QuoteBox.propTypes = propTypes;

export default QuoteBox;
