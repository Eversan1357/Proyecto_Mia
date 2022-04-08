import './Contenido_Buscar_Estudiante.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contenido_Buscar_Estudiante() {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async () => {
        await axios.get("http://localhost:8080/api/estudiante")
            .then(response => {
                setUsuarios(response.data);
                setTablaUsuarios(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.numeroDocumento.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.nombre1.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }


    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div id="buscar_div">
            <div id='buscar_divruta'>
                <img id="buscar_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="buscar_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="buscar_iconos" src='/img/icono_estudiantes.png' alt='' />
                <text id='buscar_textrutas'>Estudiantes/</text>
                <text id='buscar_textrutas'>Buscar Estudiantes</text>
            </div>
            <div id="buscar_form">
                <div id="buscar_divinfomacion" className="containerInput">
                    <input
                        className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Busqueda por Nombre o Numero de Documento"
                        onChange={handleChange}
                    />
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table id="tablains" class="table tabvle-sm table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Tipo Documento</th>
                            <th scope="col">Numero Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Institución</th>
                            <th scope="col">Sede</th>
                            <th scope="col">Grado</th>
                            <th scope="col">Fecha de Registro</th>
                            <th scope="col">Tipo Beneficio</th>
                            <th scope="col">Estado Beneficio</th>
                            <th scope="col">Ver más</th>
                        </tr>
                    </thead>

                    <tbody>
                        {usuarios &&
                            usuarios.map((estudiante) => (
                                <tr key={estudiante.idEstudiante}>
                                    <td>{estudiante.unTipoDocumento.nombre}</td>
                                    <td>{estudiante.numeroDocumento}</td>
                                    <td>{estudiante.nombre1 + " " + estudiante.nombre2}</td>
                                    <td>{estudiante.apellido1 + " " + estudiante.apellido2}</td>
                                    <td>{estudiante.fechaNacimiento}</td>
                                    <td>{estudiante.unaInstitucion.nombre}</td>
                                    <td>{estudiante.unaSede.nombre}</td>
                                    <td>{estudiante.grado}</td>
                                    <td>{estudiante.idEstudiante}</td>
                                    <td>{estudiante.idEstudiante}</td>
                                    <td>{estudiante.idEstudiante}</td>
                                    <td>{estudiante.idEstudiante}</td>
                                </tr>
                            ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default Contenido_Buscar_Estudiante;