import './Contenido_Huella_Estudiante_Nuevo.css'
import { useEffect, useState } from 'react';
import estudianteService from '../services/estudiante.service';

const Contenido_Huella_Estudiante_Nuevo = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        estudianteService.getAll()
            .then(response => {
                console.log('printing the estudiantes data', response.data);
                setEstudiantes(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, [])


    return (
        <div id='huella_div'>
            <div id='divruta'>
                <div id='divrutas'>
                    <img id="iconos" src='/img/icono_inicio.png' alt='' />
                    <text id='textrutas'>Inicio/</text>
                    <img id="iconos" src='/img/icono_administrador.png' alt='' />
                    <text id='textrutas'>Administrador/</text>
                    <text id='textrutas'>Cargue Huella Estudiante Nuevo</text>
                </div>
            </div>
            <hr />
            <form id="datos">
                <div>
                    <select id="mun" class="form-select" >
                        <option>Municipio*</option>
                    </select>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Institución Educativa">
                    </input>
                </div>
                <div>
                    <select id="mun" class="form-select" >
                        <option>Sede*</option>
                    </select>
                </div>
                <div>
                    <label for="exampleInputEmail1" class="form-label">Fecha Registro</label>
                    <input class="date" type="date" ></input>
                </div>
                <div>
                    <select id="mun" class="form-select">
                        <option>Tipo de documento*</option>
                    </select>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Numero Documento*">
                    </input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Completo*">
                    </input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Apellido Completo*">
                    </input>
                </div>
                <div>
                    <select id="mun" class="form-select">
                        <option>Grado*</option>
                    </select>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Dirección*">
                    </input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Barrio*">
                    </input>
                </div>
                <div>
                    Fecha nacimiento*<input class="date" type="date"  ></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Acudiente*">
                    </input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Parentesco*">
                    </input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Telefono/Celular*">
                    </input>
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
                    <button id="lim" type="submit" class="btn btn-danger">Guardar</button>
                </div>
                <div>
                    <button id="reg" type="submit" class="btn btn-danger">Registrar Ingreso</button>
                </div>
            </div>



            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
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
                            {estudiantes.map(estudiante => (
                                <tbody>
                                    <tr key={estudiante.idEstudiante}>
                                        <td>{estudiante.unaPersona.nombre}</td>
                                        <td>{estudiante.unaPersona.numeroDocumento}</td>
                                        <td>{estudiante.grado}</td>
                                        <td>{estudiante.unaPersona.direccion}</td>
                                        <td>{estudiante.nombreAcudiente}</td>
                                        <td>{estudiante.parentescoAcudiente}</td>
                                        <td>{estudiante.unaPersona.telefono}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
{/*-----------------------------------------------------------------*/}


    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <script src="js/sb-admin-2.min.js"></script>

    <script src="vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

    <script src="js/demo/datatables-demo.js"></script>

        </ div>
    );
}


export default Contenido_Huella_Estudiante_Nuevo;