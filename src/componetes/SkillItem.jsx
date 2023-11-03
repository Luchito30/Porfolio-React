import './skill.css';
import PropTypes from "prop-types"; 

function SkillItem({ id, titulo, Progreso }) {
    return (
      <div key={id} className="section__article__div--html">
        <label className="section__article__div--html--subhtml">{titulo}</label>
        <progress className='section__article__div--html--progress' max="100" value={Progreso}>{Progreso}</progress>
      </div>
    );
  }

  SkillItem.propTypes = {
    id: PropTypes.number,
    titulo: PropTypes.string, 
    Progreso:PropTypes.number,
  };
  
  export default SkillItem;