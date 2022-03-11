import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Archivos.css'

class Contenido_Archivos extends React.Component {
    render() {
        return (
            <div id="contenido_div">
                <div id='contenido_divruta'>
                    <div id='contenido_divrutas'>
                        <img id="contenido_iconos" src='/img/icono_inicio.png' alt='' />
                        <Link id="contenido_link_inicio" to="/Inicio">Inicio</Link>
                        <img id="iconos" src='/img/icono_ayuda.png' alt='' />
                        <text id='contenido_textrutas'>Ayuda/</text>
                        <text id='contenido_textrutas'>Archivos</text>
                    </div>
                </div>
                <hr />
                <div id='contenido_selector'>
                    <text id="contenido_tema">Tema :</text>
                    <select id='contenido_seleccionar' class="form-select" >
                        <option >Selecione una Opción</option>
                        <option download="" href="" >Diccionario de Datos</option>
                        <option>Estrategia PAE</option>
                        <option>Formato Cargue</option>
                        <option>Formato Men Planillas</option>
                        <option>Consolidado Mensual Planilla</option>
                        <option>Instructivos</option>
                        <option>Cargue Manual Usuario</option>
                        <option>Cargue Matricula</option>
                        <option>Cargue Anexo 13A</option>
                        <option>Ingreso Huella estudiante Nuevo</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default Contenido_Archivos;