import React, { Component } from 'react'
import './Contenido_Hlogin.css'

export default class Contenido_Hlogin extends Component {
    render() {
        return (
            <body>
                <div id="divbienvenido">
                    <h1 class="text-center" id='te1'>Bienvenido</h1>
                    <h2 class="text-center" id='te2'>Fundación Mía</h2>
                    <h3 class="text-center" id='te3'>Construyendo Futuro</h3>
                </div>
                <br />
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
            </body>
        )
    }
}
