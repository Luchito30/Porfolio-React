import { useState } from 'react';
import BotonProyecto from "./BotonProyecto"
import "./proyecto.css"
import PropTypes from "prop-types"; 

function Proyecto({ numero, cambiarVista }) {

    const [botonActivo, setBotonActivo] = useState('responsive');

    return (
        <section className="section--proyect">
            <h2 className="section--proyect-titulo">Proyecto ({numero})</h2>
            <article className="section__article-bootoms">
                <BotonProyecto
                    clase="section__article__button-resp"
                    titulo="Responsivo"
                    onClick={() => { 
                        cambiarVista('responsive');
                        setBotonActivo('responsive');
                    }}
                    activo={botonActivo === 'responsive'}
                />
                <BotonProyecto
                    clase="section__article__button-js"
                    titulo="JavaScript"
                    onClick={() => {
                        cambiarVista('javascript');
                        setBotonActivo('javascript');
                    }}
                    activo={botonActivo === 'javascript'}
                />
                <BotonProyecto
                    clase="section__article__button-react"
                    titulo="React"
                    onClick={() => {
                        cambiarVista('React');
                        setBotonActivo('React');
                    }}
                    activo={botonActivo === 'React'}
                />
            </article>
        </section>
    );
}

Proyecto.propTypes = {
    numero: PropTypes.number,
    cambiarVista: PropTypes.func.isRequired,
};

export default Proyecto;
