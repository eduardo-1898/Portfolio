import SideBar from './SideBar';
import image from '../images/fotoPorta.jpg'
import '../css/AboutMe.css';

export default function Aboutme() {
    return(
    <div className='aboutMe'>
        <aside className="item-nabvar">
            <SideBar/>
        </aside>
        <main className='item'>
            <div className='sectionInfo'>
                <div>
                    <p className='h1'>Hola soy <p className='NameColor'>Eduardo Jaen</p> </p>
                    <p className='h1'>un gusto conocerte. </p>
                    <div className='section-desc'>
                        <p className='description'>
                            Tengo experiencia creando aplicaciones para diferentes áreas de negocio, (retail, ventas masivas, bancos, seguros médicos). 
                            Mi stack principal es <b>.Net, JS, React, React native, SQL Server, HTML, CSS.</b>. 
                            <br></br>
                            <br></br>Adicionalmente, tengo experiencia en desarrollos con <b>PHP,
                            ServiceNow, Flutter Flow, JAVA, Spring boot, Oracle</b> entre otras tecnologías. He sido parte de numerosos desarrollos para distintas empresas
                            y a su vez, he realizado integraciones con nuevos softwares <b>ERP, CRM</b> entre otros. 
                            <br></br>
                            <br></br>También cuento con experiencia en el <b>análisis de datos</b> y desarrollo de dashboards por medio de <b>Power BI y Tableau</b>, manejando númerosas cantidades de datos.
                        </p>
                    </div>
                    <hr className='dividerYellow'></hr>
                    <div className='number-data'>
                        <div className='sectionInfo'>
                            <p className='yellowColor'>+  
                                <p className='h3 years'> años de experiencia</p>
                            </p>
                            <p className='yellowColor'>+ 
                                <p className='h3 projects'> proyectos culminados</p>
                            </p>
                        </div>
                    </div>
                    <button className='contactBtn'>Descargar mi CV</button>

                </div>
                <div className='imageContainer'>
                    <img className="imageProfileContent" src={image}></img>
                </div>
            </div>
        </main>
    </div>
    );
}