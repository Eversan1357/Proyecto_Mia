import React, { Component } from 'react'
import './Contenido_Beneficio.css'
import { Link } from "react-router-dom";

export default class Contenido_Beneficio extends Component {
    render() {
        return (
            <div id='beneficio_div'>
                <div id='beneficio_divruta'>
                    <img id="beneficio_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="beneficio_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="beneficio_iconos" src='/img/icono_estudiantes.png' alt='' />
                    <text id='beneficio_textrutas'>Beneficio/</text>
                    <text id='beneficio_textrutas'>Registro Beneficio</text>
                </div>
                <div id='recuadro'>
                    <div id='cuadro'>
                        <h2 class="text-center" id='te4' >HUELLA</h2>
                        <img src='/img/Huella.jpg' alt='' />
                    </div>
                    <div id='cuadro'>
                        <h2 class="text-center" id='te4' >FOTO</h2>
                        <img src='/img/people.jpg' alt='' />
                    </div>
                </div>
                <br />
                <br />
                <div id='divbotones'>
                    <button id='botones' className='btn btn-danger'>
                        <a href='./Inicio' >Validar Ingreso</a>
                    </button>
                    <button id='botones' className='btn btn-danger'>
                        <a href='./Inicio' >Validar Ingreso</a>
                    </button>
                </div>
            </div>
        )
    }
}
