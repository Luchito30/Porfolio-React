import PropTypes from "prop-types"; 

function ErrorComponent({ error, errorClass }) {
  return (
    <div className={`errorcontener ${errorClass}`}>
      <h3 className='errorcontener__h3'>Hubo un Error!</h3>
      <p className='errorcontener__p'>{error}</p>
    </div>
  );
}

ErrorComponent.propTypes = {
    error: PropTypes.string,
    errorClass: PropTypes.string,
};

export default ErrorComponent;