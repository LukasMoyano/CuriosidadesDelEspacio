import PropTypes from "prop-types";
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
QuoteBox.propTypes = {
  phrase: PropTypes.string.isRequired,
};
export default QuoteBox;
