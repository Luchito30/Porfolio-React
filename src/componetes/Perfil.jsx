import { useState, useEffect } from 'react';
import './perfil.css';
import './error.css'
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import ContactoComponent from './ContactoComponent';
import NameComponet from './NameComponet';
import ImgComponet from './ImgComponet';
import DescripcionComponet from './DescripcionComponet';

function Perfil() {
  const [perfilData, setPerfilData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            'https://my-json-server.typicode.com/Luchito30/Api-digitalers/Perfil'
          );
          if (!response.ok) {
            throw new Error(`Error al obtener los datos del perfil`);
          }

          const data = await response.json();
          setPerfilData(data);
        } catch (error) {
          console.error(error);
          setError(error.message);
        }
      }

      fetchData();
    }, 500);
  }, []);

  if (error) {
    return <ErrorComponent error={error} errorClass="header__loader" />;
  }

  if (!perfilData) {
    return <Loader clase="header__loader"/>;
  }

  return (
    <header className='header'>
        <ImgComponet avatar={perfilData.avatar} imgClass="header__section--img-perfil" sectionClass="header__section--img" alt="Imagen Perfil"/>
      <section className="header__section">
        <div className="header__section__div--info">
          <NameComponet nombre={perfilData.nombre}  profeccion={perfilData.profeccion} />

          <article className="header__section__article--Contacto">
            <ContactoComponent medio={perfilData.mail} contactoClase="header__section__article--carta" icono="fa-solid fa-envelope"/>
            <br />
            <ContactoComponent medio={perfilData.tel} contactoClase="header__section__article--tel" icono="fa-solid fa-phone"/>
          </article>
        </div>
        <DescripcionComponet descipcion={perfilData.descipcion} ClassDescripcion="" articleClass="header__section__article--Presentacion"/>
      </section>
    </header>
  );
}

export default Perfil;