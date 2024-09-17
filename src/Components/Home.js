import '../css/Home.css';
import SideBar from './SideBar';
import image from '../images/fotoPorta.jpg'
import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <div className='homepage'>
      <aside className="item-nabvar">
        <SideBar/>
      </aside>
      <main className='item'>
        
        <div className='sectionInfo'>
          
          <div>
            <h1 className='h1'>Hola soy <p className='NameColor'>Eduardo</p></h1>
            <h2 className='h2'>Full Stack Developer</h2>
            <button className='contactBtn'>Ponerme en contacto</button>
          </div>

          <div className='imageContainer'>
            <img className="imageProfileContent" src={image}></img>
          </div>
        
        </div>

        <hr className='dividerYellow'></hr>
        
        <div className='sectionInfo'>
          <div className='next-section'>
            <button className='next-section-btn'>
              <GoChevronRight className='icon-down' />
            </button>
          </div>

          <div>
            <div className='details'>
              <h3 className='h3'>Experto en desarrollo</h3>
              <p className='subtitle'>Ubicado en Costa Rica.</p>
              <p className='description'>Estas buscando a un desarrollador para crear paginas web, integraciones, aplicaciones moviles o desarrollar dashboards en Power BI?, ponte en contacto conmigo.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
