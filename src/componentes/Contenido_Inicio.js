import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Contenido_Inicio.css'

export default class Contenido_Inicio extends Component {
    render() {
        return (
            <div id="body">
                <div id='div_ruta'>
                    <img id="icono" src='/img/icono_inicio.png' alt='' />
                    <text id='text_rutas'>Inicio</text>
                </div>
                <hr />
                <h4 id='text_titulo' >Bienvenido al Sistema</h4>
                <Carousel id="carusel" >
                    <Carousel.Item interval={4000}>
                        <img
                            id='img_carusel'
                            className="d-block w-100"
                            src='/img/img1.jpeg'
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            id='img_carusel'
                            className="d-block w-100"
                            src='/img/img2.jpeg'
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            id='img_carusel'
                            className="d-block w-100"
                            src='/img/img3.jpeg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}
