import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './certificado.css';
import './error.css'
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swiper.css"
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import ImgComponet from './ImgComponet';
import DatosComponet from './DatosComponet';

function Certificado() {
    const [certificadoData, setcertificado] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                try {
                    const response = await fetch(
                        'https://my-json-server.typicode.com/Luchito30/Api-digitalers/certificado'
                    );
                    if (!response.ok) {
                        throw new Error(`Error al obtener los datos de los Certificados`);
                    }

                    const data = await response.json();
                    setcertificado(data);

                } catch (error) {
                    console.error(error);
                    setError(error.message);
                }
            }

            fetchData();
        }, 500);
    }, []);

    if (error) {
        return <ErrorComponent error={error} errorClass="section--certificado" />;
      }

    if (!certificadoData) {
        return <Loader />;
    }

    return (
        <section className="section--certificado">
            <h2 className="section--certificado-titulo">Certificados</h2>
            <div className="section--containercetification">
                <div className="swiper Swiper-certi">
                    <div className="swiper-wrapper slider-certi">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={true}
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
                                },
                            }}
                            className="mySwiper"
                        >
                            {certificadoData.map((dato) => (
                                <SwiperSlide key={dato.id}>
                                    <article className="section__article--certificado">
                                        <div className="section__article__div-imgconteiner">
                                            <ImgComponet avatar={dato.img} imgClass="section__article-img card-img-top" sectionClass="" alt="Diploma"/>
                                        </div>
                                        <div className="div-conteiner">
                                            <DatosComponet datosClass="section__article__div-titulo" dato={dato.titulo}/>
                                            <DatosComponet datosClass="section__article__div-fecha" dato={dato.fecha}/>
                                        </div>
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

export default Certificado;