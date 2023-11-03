import PropTypes from "prop-types";

function ImgComponet({ avatar, imgClass, sectionClass, alt}) {
    return (
        <section className={sectionClass}>
            <img className={imgClass} src={avatar} alt={alt} />
        </section>
    )
}

ImgComponet.propTypes = {
    avatar: PropTypes.string,
    imgClass: PropTypes.string,
    sectionClass: PropTypes.string,
    alt: PropTypes.string,
};

export default ImgComponet