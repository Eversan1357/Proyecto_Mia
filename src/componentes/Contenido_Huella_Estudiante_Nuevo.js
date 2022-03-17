import './Contenido_Huella_Estudiante_Nuevo.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import estudianteService from '../services/estudiante.service';

class hola extends Comment{
    handleSubmit = e => {
        e.preventDefaultult();
        const data = {

        };
    };
    render(){
        return(
            <div>
                
            </div>
        )

    }
};



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
            });
    }, []);


    /*

    handleSubmit = e => {
        e.preventDefaultult();
        console.log(data);
    }
*/

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
                    <select id="mun" class="form-select" >
                        <option>Municipio*</option>
                    </select>
                    <input type="text" className='form-control' onChange={e => this.municipio = e.target.value}/>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Institución Educativa" onChange={e => this.institucion = e.target.value} ></input>
                </div>
                <div>
                    <select id="mun" class="form-select" >
                        <option>Sede*</option>
                    </select>
                    <input type="text" className='form-control' onChange={e => this.sede = e.target.value}/>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Fecha Registro"></input>
                </div>
                <div>
                    <select id="mun" class="form-select">
                        <option>Tipo de documento*</option>
                    </select>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Numero Documento:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Completo:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Apellido Completo:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Grado:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Dirección:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Barrio:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Fecha Nacimiento"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Acudiente:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Parentesco:*"></input>
                </div>
                <div>
                    <input type="text" id="ins" class="form-control" placeholder="Telefono/Celular:*"></input>
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
                            {estudiantes.map(estudiante => (
                                <tbody>
                                    <tr key={estudiante.idEstudiante}>
                                        <td>{estudiante.nombre1}</td>
                                        <td>{estudiante.numeroDocumento}</td>
                                        <td>{estudiante.grado}</td>
                                        <td>{estudiante.direccionRecidencia}</td>
                                        <td>{estudiante.acudiente}</td>
                                        <td>{estudiante.acudiente}</td>
                                        <td>{estudiante.telefono}</td>
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