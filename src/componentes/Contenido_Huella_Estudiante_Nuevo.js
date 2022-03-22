import './Contenido_Huella_Estudiante_Nuevo.css'
import { Link } from "react-router-dom";
import React from 'react'
import { useEffect, useState } from 'react';


const Contenido_Huella_Estudiante_Nuevo = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    /*
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.blind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/api/create', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "first_name": this.firstName.value
            }
        });
    };
    */



    useEffect(() => {
        fetch('http://localhost:8080/api/estudiante')
            .then((response) => {
                return response.json()
            })
            .then((estudiante) => {
                setEstudiantes(estudiante)
            })
    }, [])

    return (
        <div id='huella_div'>
            <div id='huella_divruta'>
                <img id="huella_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="huella_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="huella_iconos" src='/img/icono_administrador.png' alt='' />
                <text id='huella_textrutas'>Administrador/</text>
                <text id='huella_textrutas'>Huella Estudiante Nuevo</text>
            </div>
            <form id="datos">
                <div>
                    <select id="mun" class="form-select" >
                        <option>Municipio*</option>
                    </select>
                    <input type="text" className='form-control' name="municipio" />
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Institución Educativa" name="institucionEducativa"  ></input>
                </div>
                <div>
                    <select id="mun" class="form-select" >
                        <option>Sede*</option>
                    </select>
                    <input type="text" className='form-control' name="sede" />
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Fecha Registro" name="fechaRegistro" ></input>
                </div>
                <div>
                    <select id="mun" class="form-select">
                        <option>Tipo de documento*</option>
                    </select>
                    <input type="text" id="ins" class="form-control" placeholder="Fecha Registro" name="tipoDocumento" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Numero Documento:*" name="numeroDocumento" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Completo:*" name="nombre1" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Apellido Completo:*" name="apellido1" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Grado:*" name="grado" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Dirección:*" name="direccion" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Barrio:*" name="barrio" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Fecha Nacimiento" name="fechaNacimiento" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Acudiente:*" name="acudiente" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Parentesco:*" ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Telefono/Celular:*" name="telefono" ></input>
                </div>
            </form>
            <div id="divdatos">
                <div >
                    <img id="huellita" src='/img/Huella.jpg' alt='' />
                </div>
                <div>
                    <select id="mun" class="form-select">
                        <option>Tipo Jornada*</option>
                    </select>
                </div>
                <div>
                    <select id="mun" class="form-select">
                        <option>Complemento*</option>
                    </select>
                </div>
                <div>
                    <button id="lim" type="submit" class="btn btn-danger">Limpiar</button>
                    <button id="lim" class="btn btn-primary btn-block">Guardar</button>
                </div>
                <div>
                    <button id="reg" type="submit" class="btn btn-danger">Registrar Ingreso</button>
                </div>
            </div>

            <div className="card shadow mb-4" id='card-table'>
                <div className='card-body'>
                    <div className='table-responsive'>
                        <table className='table table-bordered' id='tablacar' width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Documento</th>
                                    <th scope="col" >Grado</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Acudiente</th>
                                    <th scope="col">Parentesco</th>
                                    <th scope="col">Celular</th>
                                </tr>
                            </thead>
                            {estudiantes.map(listadoEstudiantes => (
                                <tbody>
                                    <tr key={listadoEstudiantes.idEstudiante}>
                                        <td>{listadoEstudiantes.nombre1}</td>
                                        <td>{listadoEstudiantes.numeroDocumento}</td>
                                        <td>{listadoEstudiantes.grado}</td>
                                        <td>{listadoEstudiantes.direccionRecidencia}</td>
                                        <td>{listadoEstudiantes.acudiente}</td>
                                        <td>{listadoEstudiantes.acudiente}</td>
                                        <td>{listadoEstudiantes.telefono}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
                <nav className='d-flex justify-content-center'>
                    <ul className='pagination'>
                        <li className='page-link'>1</li>
                        <li className='page-link'>2</li>
                        <li className='page-link'>3</li>
                    </ul>
                </nav>
            </div>
        </ div>
    );
}

export default Contenido_Huella_Estudiante_Nuevo;