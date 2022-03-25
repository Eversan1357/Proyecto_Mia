import './Contenido_Huella_Estudiante_Nuevo.css'
import { Link } from "react-router-dom";
import React, { Component } from 'react'
import axios from 'axios';

class Contenido_Huella_Estudiante_Nuevo extends Component {

    handleSubmit = e => {

        e.preventDefault();

        const data = {
            acudiente: this.acudiente,
            apellido1: this.apellido1,
            apellido2: this.apellido2,
            direccionRecidencia: this.direccionRecidencia,
            fechaNacimiento: this.fechaNacimiento,
            genero: this.genero,
            grado: this.grado,
            municipioRecidencia: this.municipioRecidencia,
            nacimientoDepartamento: this.nacimientoDepartamento,
            nacimientoMunicipio: this.nacimientoMunicipio,
            nombre1: this.nombre1,
            nombre2: this.nombre2,
            numeroDocumento: this.numeroDocumento,
            telefono: this.telefono,
            telefonoAcudiente: this.telefonoAcudiente,

            parentesco: this.parentesco,
            fecharegistro: this.fecharegistro,
            barrio: this.barrio
        };

        axios.post('http://localhost:8080/api/estudiante', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {

        return (
            <div id='huella_div'>
                <div id='huella_divruta'>
                    <img id="huella_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="huella_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="huella_iconos" src='/img/icono_administrador.png' alt='' />
                    <text id='huella_textrutas'>Administrador/</text>
                    <text id='huella_textrutas'>Huella Estudiante Nuevo</text>
                </div>
                <form id="datos" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Municipio"
                        />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Institución Educativa" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Sede" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Fecha Registro" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Tipo Documento" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Municipio Residencia" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Departamento de Nacimiento" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Municipio de Nacimiento" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Numero Documento" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Primer Nombre"
                            onChange={e => this.nombre1 = e.target.value}/>
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Segundo Nombre" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Primer Apellido" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Segundo Apellido" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Genero:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Grado:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Dirección:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Barrio:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Fecha Nacimiento" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Nombre Acudiente:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Parentesco:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Telefono/Celular:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Telefono/Celular Acudiente:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Tipo Jornada:*" />
                    </div>
                    <div>
                        <input type="text" id="ins" className='form-control' placeholder="Complemento:*" />
                    </div>
                    
                    <div id='reg'>
                        <img id="huellita" src='/img/Huella.jpg' alt='' />
                        <button id="" type="submit" class="btn btn-danger" disabled>Regitro Huella</button>
                    </div>
                    <div id='reg'>
                        <img id="huellita" src='/img/people.jpg' alt='' />
                        <button id="" type="submit" class="btn btn-danger" disabled>Registro Facial</button>
                    </div>
                    <div>
                        <button id="lim" type="submit" class="btn btn-danger" disabled>Limpiar</button>
                        <button id="lim" class="btn btn-primary btn-block">Guardar</button>
                    </div>
                </form>
            </ div>
        );
    }
}
export default Contenido_Huella_Estudiante_Nuevo;