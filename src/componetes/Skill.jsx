import { useState, useEffect } from 'react';
import './skill.css';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import SkillItem from './SkillItem';

function Skill() {
  const [skillData, setskill] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            'https://my-json-server.typicode.com/Luchito30/Api-digitalers/skills'
          );
          if (!response.ok) {
            throw new Error(`Error al obtener los datos de los Skills`);
          }

          const data = await response.json();
          setskill(data);
        } catch (error) {
          console.error(error);
          setError(error.message);
        }
      }

      fetchData();
    }, 500);
  }, []);

  if (error) {
    return <ErrorComponent error={error} errorClass="section--skills"/>;
  }

  if (!skillData) {
    return <Loader />;
  }

  const skillItems = skillData.slice(0, 2).map((dato) => (
    <SkillItem key={dato.id} id={dato.id} titulo={dato.titulo} Progreso={dato.Progreso} />
  ));

  const skillItems2 = skillData.slice(2, 4).map((dato) => (
    <SkillItem key={dato.id} id={dato.id} titulo={dato.titulo} Progreso={dato.Progreso} />
  ));

  return (
    <section className='section--skills'>
      <h2 className="section--skills-titulo">Skills</h2>
      <article className="section__article--skills-container">
        <div className="section__article__div--skills-container1">
          {skillItems}
        </div>
        <div className="section__article__div--skills-container2">
          {skillItems2}
        </div>
      </article>
    </section>
  );
}

export default Skill;