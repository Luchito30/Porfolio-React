import PropTypes from "prop-types";

function ContactoComponent({medio,contactoClase,icono}){
    return(
        <>
        <i className={`${icono} ${contactoClase}`}></i>
        <span>{medio}</span>
        </>
    )
}

ContactoComponent.propTypes = {
    medio: PropTypes.string,
    contactoClase: PropTypes.string,
    icono: PropTypes.string,
};

export default ContactoComponent