import SideBar from './SideBar';
import '../css/Experience.css';
import image from '../images/desarrollo.png'
import imagemovil from '../images/Movil.png'

export default function Experience() {
    return(
    <div className='experience'>
        <aside className="item-nabvar">
            <SideBar/>
        </aside>
        <main className='item'>
            <div className='headerContent'>
                <h1 className='h1'>Diseños web y <p className='NameColor'>proyectos</p></h1>
                <h2 className='h2'>Sencillos y fáciles de interactuar</h2>
            </div>
            <div className='carousel'>

                <div className='item-carousel'>
                    <p className='subtitle'>Aplicaciones web</p>
                    <p className='description'>Ofrezco servicios especializados en el desarrollo de aplicaciones a la medida, diseñadas para satisfacer 
                        las necesidades específicas de tu negocio. Con experiencia en la integración de sistemas como ERPs y CRMs, 
                        proporciono soluciones que optimizan y automatizan procesos clave.
                    </p>
                </div>
                <div className='item-carousel'>
                    <p className='subtitle'>Desarrollo moviles</p>
                    <p className='description'>Ofrezco servicios especializados en el desarrollo de aplicaciones móviles utilizando React Native, 
                        una tecnología que permite crear aplicaciones nativas para iOS y Android con un solo código base. 
                    </p>
                </div>

                <div className='item-carousel'>
                    <p className='subtitle'>APIS Rest y SOAP</p>
                    <p className='description'>Ofrezco servicios especializados en el desarrollo e implementación de APIs REST y SOAP, diseñadas 
                        para optimizar la comunicación y el intercambio de datos entre tus aplicaciones y sistemas externos.
                    </p>
                </div>
                <div className='item-carousel'>
                    <p className='subtitle'>Análisis de datos</p>
                    <p className='description'>Ofrezco servicios especializados en la creación y gestión de bases de datos, así como en el análisis de datos, 
                        diseñados para optimizar la eficiencia y la toma de decisiones en tu empresa.
                    </p>
                </div>
                
            </div>

            <hr className='dividerYellow'></hr>

        </main>
    </div>
    );
}
