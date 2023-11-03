import PropTypes from "prop-types";

function NameComponet({nombre,profeccion}) {
    return (
        <article className="header__section__article--Name">
            <h1 className="header__section__article--Name-titulo">{nombre}</h1>
            <small className="header__section__article--Name-nombre">{profeccion}</small>
          </article>
    )
}

NameComponet.propTypes = {
    nombre: PropTypes.string,
    profeccion: PropTypes.string,
};

export default NameComponet