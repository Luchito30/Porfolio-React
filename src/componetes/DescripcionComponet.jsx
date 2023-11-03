import PropTypes from "prop-types";

function DescripcionComponet({ descipcion, ClassDescripcion, articleClass }) {
    return (
        <article className={articleClass}>
            <p className={ClassDescripcion} >{descipcion}</p>
        </article>
    )
}

DescripcionComponet.propTypes = {
    descipcion: PropTypes.string,
    ClassDescripcion: PropTypes.string,
    articleClass: PropTypes.string,
};

export default DescripcionComponet