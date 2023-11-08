import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './experiencia.css';
import './error.css'
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swiper.css"
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import DescripcionComponet from './DescripcionComponet';
import ImgComponet from './ImgComponet';
import DatosComponet from './DatosComponet';

function Experiencia() {
    const [expData, setexp] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                try {
                    const response = await fetch(
                        'https://my-json-server.typicode.com/Luchito30/Api-digitalers/experiencia'
                    );
                    if (!response.ok) {
                        throw new Error(`Error al obtener los datos de la Experiencia`);
                    }

                    const data = await response.json();
                    setexp(data);

                } catch (error) {
                    console.error(error);
                    setError(error.message);
                }
            }

            fetchData();
        }, 500);
    }, []);

    if (error) {
        return <ErrorComponent error={error}  errorClass= "section--experiens"/>;
      }

    if (!expData) {
        return <Loader clase= "section--experiens"/>;
    }

    return (
        <section className="section--experiens">
            <h2 className="section--experiens-titulo">Experiencia</h2>
            <div className="section--experiens--conteiner">
                <div className="swiper Swiper-experiens">
                    <div className="swiper-wrapper slider-experiens">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={false}
                            pagination={{ clickable: true }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                            autoplay={{
                                delay: 5000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                    direction: 'vertical',
                                },
                            }}
                            className="mySwiper"
                        >
                            {expData.map((dato) => (
                                <SwiperSlide key={dato.id}>
                                    <article className="section__article--experiens">
                                        <div className="section__article__div--experiens">
                                            <ImgComponet avatar={dato.img} imgClass="section__article__div--experiens-img" sectionClass="" alt="Img Experiencia"/>
                                            <span className="section__article__div--experiens-textcontainer">
                                                <DatosComponet datosClass="section__article__div--experiens-fecha" dato={dato.fecha} />
                                                <DatosComponet datosClass="section__article__div--experiens-name" dato={dato.titulo} />
                                            </span>
                                        </div>
                                        <DescripcionComponet descipcion={dato.descripcion} ClassDescripcion="section__article--description-texto" articleClass="section__article--description"/>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiencia;