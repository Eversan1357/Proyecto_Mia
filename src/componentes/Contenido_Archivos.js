import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Archivos.css'

class Contenido_Archivos extends React.Component {
    render() {
        return (
            <div id="archivos_div">
                <div id='archivos_divruta'>
                    <img id="archivos_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="archivos_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="archivos_iconos" src='/img/icono_ayuda.png' alt='' />
                    <text id='archivos_textrutas'>Ayuda/</text>
                    <text id='archivos_textrutas'>Archivos</text>
                </div>
                <div id='archivos_selector'>
                    <text id="archivos_tema">Tema :</text>
                    <select id='archivos_seleccionar' class="form-select">
                        <option >Selecione Un Formato</option>
                        <option download="FORMATO DE PLANILLA - 1.xlsx" href="./public/FORMATO_DE_PLANILLA - 1.xlsx" >Diccionario de Datos</option>
                        <option>Estrategia PAE</option>
                    </select>
                    <a href="../public/descargas/FORMATO_DE_PLANILLA-2.xls" download="FORMATO_DE_PLANILLA-2.xls">Download Text</a>
                </div>
            </div>
        )
    }
}
export default Contenido_Archivos;