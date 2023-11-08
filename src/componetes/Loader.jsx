import "./loader.css"
import PropTypes from "prop-types";

function Loader({clase}) {
    return (
        <>
        <div className={`loadercenter ${clase}`}>
        <div className="loader"></div>
        </div>
        </>
    );
}

Loader.propTypes = {
    clase: PropTypes.string,
};
export default Loader;