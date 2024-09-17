import React from "react";
import "../css/SideBar.css";
import image from '../images/fotoPorta.jpg'
import { Link } from 'react-router-dom';

function SideBar(){
    return(
        <div className="containerSidebar">
            <div className="profileContainer">
                <span class="loader"></span>
            </div>
            <div className="links">
                <ul>
                    <li></li>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/experience">Experiencia</a></li>
                    <li><a href="#">Contactame</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;