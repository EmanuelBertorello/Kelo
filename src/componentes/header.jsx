import React from "react";
import "../hojas-de-estilo/header.css"

function Top(){
    return(
        <div className="headerdiv">
             <i className="logo fa-solid fa-person"></i>
            <nav className="NavDeLosContactos">
                <a className="link">Sobre nosotros</a>
                <a className="logoRed fa-brands fa-instagram"></a>
                <a className="logoRed fa-brands fa-whatsapp"></a>
                <a className="LogoRed fa-brands fa-facebook-f"> </a>
            </nav>
               <div className="divBotonDeturno"><a className="solicitarTurnoButton">Solicitar turno</a></div>
            
        </div>
    )}
export default Top 
