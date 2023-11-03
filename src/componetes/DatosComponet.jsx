import PropTypes from "prop-types";

function DatosComponet({datosClass, dato}){
    return (
        <p className={datosClass}>{dato}</p>
    )
}

DatosComponet.propTypes = {
    datosClass: PropTypes.string,
    dato: PropTypes.string || PropTypes.number ,
};

export default DatosComponet