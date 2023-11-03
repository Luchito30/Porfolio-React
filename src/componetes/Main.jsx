import '../general.css';
import Card from './Card';
import Certificado from './Certificado';
import Experiencia from './Experiencia';
import Skill from './Skill';

function Main() {
    return (
        <main className='main'>
            <Skill />
            <Card />
            <Experiencia />
            <Certificado />
        </main>
    );
}

export default Main;