import './Contenido_Huella_Estudiante_Nuevo.css'
import { Link } from "react-router-dom";
import { Component, useEffect, useRef, useState } from 'react'
import axios from 'axios';

class Contenido_Huella_Estudiante_Nuevo extends Component {

    //-------------Post para registro de estudiante----------------//
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            acudiente: this.acudiente,
            apellido1: this.apellido1,
            apellido2: this.apellido2,
            direccionRecidencia: this.direccionRecidencia,
            //director: this.director,
            fechaNacimiento: this.fechaNacimiento,
            genero: this.genero,
            grado: this.grado,
            municipioRecidencia: this.municipioRecidencia,
            nacimientoDepartamento: this.nacimientoDepartamento,
            nacimientoMunicipio: this.nacimientoMunicipio,
            nombre1: this.nombre1,
            nombre2: this.nombre2,
            numeroDocumento: this.numeroDocumento,
            //paisOrigen: this.paisOrigen,
            telefono: this.telefono,
            telefonoAcudiente: this.telefonoAcudiente,
            //unMunicipio: this.unMunicipio,
            //unTipoDocumento: this.unTipoDocumento,
            //unaDiscapacidad: this.unaDiscapacidad,
            //unaEtnia: this.unaEtnia,
            //unaInstitucion: this.unaInstitucion,
            //unaJornada: this.unaJornada,
            //unaSede: this.unaSede
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

    //-------------Get de datos para los selects:tipo documento----------------//
    state = {
        pais: [],
        municipio: [],
        institucion: [],
        sede: [],
        documento: [],
        departamento: [],
        jornada: [],
        discapacidad: [],
        etnia: []
    }
    componentDidMount() {
        axios
            .get('http://localhost:8080/api/paises/listar')
            .then((response) => {
                console.log(response);
                this.setState({ pais: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        axios
            .get('http://localhost:8080/api/municipios/listar')
            .then((response) => {
                console.log(response);
                this.setState({ municipio: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:8080/api/institucion')
            .then((response) => {
                console.log(response);
                this.setState({ institucion: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get('http://localhost:8080/api/sede/listar')
            .then((response) => {
                console.log(response);
                this.setState({ sede: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get('http://localhost:8080/api/tipoDocumento')
            .then((response) => {
                console.log(response);
                this.setState({ documento: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        axios
            .get('http://localhost:8080/api/departamento/listar')
            .then((response) => {
                console.log(response);
                this.setState({ departamento: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:8080/api/jornada/listar')
            .then((response) => {
                console.log(response);
                this.setState({ jornada: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get('http://localhost:8080/api/discapacidad/listar')
            .then((response) => {
                console.log(response);
                this.setState({ discapacidad: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get('http://localhost:8080/api/etnia/listar')
            .then((response) => {
                console.log(response);
                this.setState({ etnia: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    ///----------------------------------------------------------///

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
                        <label>País Origen:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.pais.map(paises => (
                                <option key={paises.id_Pais} value={paises.nombre}>{paises.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Municipio:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.municipio.map(municipios => (
                                <option key={municipios.id_Municipio} value={municipios.nombre}>{municipios.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Institucion:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.institucion.map(instituciones => (
                                <option key={instituciones.id_Institucion} value={instituciones.nombre}>{instituciones.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Sede:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.sede.map(sedes => (
                                <option key={sedes.id_Sede} value={sedes.nombre}>{sedes.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Director:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.institucion.map(instituciones => (
                                <option key={instituciones.id_Institucion} value={instituciones.rector.unaPersona.nombre}>{instituciones.rector.unaPersona.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Tipo de Documento</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.documento.map(documentos => (
                                <option key={documentos.id_TipoDocumento} value={documentos.nombre}>{documentos.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Numero Documento:*"
                            onChange={e => this.numeroDocumento = e.target.value} />
                    </div>
                    <div>
                        <label>Municipio de Residencia:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.municipio.map(municipios => (
                                <option key={municipios.id_Municipio} value={municipios.nombre}>{municipios.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Departamento de Nacimiento:*</label>
                        <select className="form-select" aria-label="Default select example">
                            {this.state.departamento.map(departamentos => (
                                <option key={departamentos.id_Departamento} value={departamentos.nombre}>{departamentos.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Municipio de Nacimiento:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.municipio.map(municipios => (
                                <option key={municipios.id_Municipio} value={municipios.nombre}>{municipios.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Primer Nombre:*"
                            onChange={e => this.nombre1 = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Segundo Nombre:*"
                            onChange={e => this.nombre2 = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Primer Apellido:*"
                            onChange={e => this.apellido1 = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Segundo Apellido:*"
                            onChange={e => this.apellido2 = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Genero:*"
                            onChange={e => this.genero = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Grado:*"
                            onChange={e => this.grado = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Dirección Residencia:*"
                            onChange={e => this.direccionRecidencia = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Fecha Nacimiento:*"
                            onChange={e => this.fechaNacimiento = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Nombre Acudiente:*"
                            onChange={e => this.acudiente = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Telefono/Celular:*"
                            onChange={e => this.telefono = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Telefono/Celular Acudiente:*"
                            onChange={e => this.telefonoAcudiente = e.target.value} />
                    </div>
                    <div>
                        <label>Tipo de Jornada:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.jornada.map(jornadas => (
                                <option key={jornadas.id_Jornada} value={jornadas.nombre}>{jornadas.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Tipo de Discapacidad:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.discapacidad.map(discapacidades => (
                                <option key={discapacidades.id_TipoDiscapacidad} value={discapacidades.nombre}>{discapacidades.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label>Tipo de Etnia:*</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                            {this.state.etnia.map(etnias => (
                                <option key={etnias.id_Etnia} value={etnias.nombre}>{etnias.nombre}</option>
                            )
                            )}
                        </select>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
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