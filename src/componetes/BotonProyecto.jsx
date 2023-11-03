import PropTypes from "prop-types";

function BotonProyecto({ clase, titulo, onClick, activo  }) {
  const clasesBoton = `${clase} ${activo ? 'mostrar' : ''}`;


  return (
    <button type="button" className={clasesBoton} onClick={onClick}>
      {titulo}
    </button>
  );
}

BotonProyecto.propTypes = {
  clase: PropTypes.string,
  titulo: PropTypes.string,
  onClick: PropTypes.func,
  activo: PropTypes.bool,
};

export default BotonProyecto;
