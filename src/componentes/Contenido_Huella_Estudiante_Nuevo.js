import './Contenido_Huella_Estudiante_Nuevo.css'
import { Link } from "react-router-dom";
import { Component } from 'react'
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
        documento: [],
        documentoTipo: ''
    }
    componentDidMount() {
        this.getdocumento();
    }
    getdocumento = () => {
        axios.get('http://localhost:8080/api/tipoDocumento')
            .then(res => {
                this.setState({
                    documento: res.data,
                });
                console.log(this.state);
            });
    }
    handleChange = (e) => {
        this.setState({
            documentoTipo: e.target.value
        })
    }

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
                        <input type="text" id="huella_inputs" className='form-control' placeholder="País Origen:*"
                        />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Municipio:*"
                        />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Institucion:*"
                        />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Sede:*"
                        />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Director:*"
                        />
                    </div>
                    <div>
                        <label>Tipo Documento</label>
                        <select className="form-select" aria-label="Default select example" onChange={this.handleChange}>
                            {this.state.documento.map((documentos) => {
                                return (
                                    <option key={documentos.idTipoDocumento}
                                        value={documentos.nombre}>{documentos.nombre}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Numero Documento:*"
                            onChange={e => this.numeroDocumento = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Municipio de Residencia:*"
                            onChange={e => this.municipioRecidencia = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Departamento de Nacimiento:*"
                            onChange={e => this.nacimientoDepartamento = e.target.value} />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Municipio de Nacimiento:*"
                            onChange={e => this.nacimientoMunicipio = e.target.value} />
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
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Tipo Jornada:*"
                        />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Discapacidad:*"
                        />
                    </div>
                    <div>
                        <input type="text" id="huella_inputs" className='form-control' placeholder="Etnia:*"
                        />
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