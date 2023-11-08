import { useState, useEffect } from 'react';
import './card.css';
import './error.css';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import Proyecto from './Proyecto';
import ImgComponet from './ImgComponet';
import DescripcionComponet from './DescripcionComponet';
import BotonProyecto from './BotonProyecto';
import DatosComponet from './DatosComponet';

function Card() {
    const [cardData, setCard] = useState(null);
    const [error, setError] = useState(null);
    const [vistaActual, setVistaActual] = useState('responsive');

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                try {
                    const response = await fetch(
                        'https://my-json-server.typicode.com/Luchito30/Api-digitalers/proyecto'
                    );
                    if (!response.ok) {
                        throw new Error(`Error al obtener los datos de las Cards`);
                    }

                    const data = await response.json();
                    setCard(data);
                } catch (error) {
                    console.error(error);
                    setError(error.message);
                }
            }

            fetchData();
        }, 500);
    }, []);

    if (error) {
        return <ErrorComponent error={error} errorClass="card--container" />;
    }

    if (!cardData) {
        return <Loader clase="card--container"/>;
    }

    const cambiarVista = (vista) => {
        setVistaActual(vista);
    };

    return (
        <>
            <Proyecto numero={cardData[vistaActual].length} cambiarVista={cambiarVista} />
            <div className="card--container">
                {cardData[vistaActual].map((dato) => (
                    <section key={dato.id} className="section--card">
                        <ImgComponet sectionClass="section--card-containerimg" imgClass="section--card-img" avatar={dato.img} alt="Proyecto"/>
                        <article className="section__article--container">
                            <div className="section__article--card-conteinertitulo">
                                <DatosComponet datosClass="section__article--card-hastag" dato={dato.etiqueta} />
                                <DatosComponet datosClass="section__article--card-titulo" dato={dato.titulo} />
                            </div>
                            <DescripcionComponet descipcion={dato.descripcion} ClassDescripcion="section__article--card-text" articleClass=""/>
                            <div className="section__article--card-botons">
                                <a className='section__article--card-a' href=""><BotonProyecto clase="section__article--card-demo" titulo="Demo"/></a>
                                <a className='section__article--card-a' href=""><BotonProyecto clase="section__article--card-code" titulo="Code"/></a>
                            </div>
                        </article>
                    </section>
                ))}
            </div>
        </>
    );
}

export default Card;
