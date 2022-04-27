import axios from 'axios';
import React, { Component } from 'react'

export default class contenido_selects extends Component {


    handleSubmit = e => {
        e.preventDefault();
        const data = {
            acudiente: "prueba",
            apellido1: "prueba",
            apellido2: "prueba",
            direccionRecidencia: "prueba",
            fechaNacimiento: "prueba",
            genero: "prueba",
            grado: "prueba",

            director: { 'id': this.unMunicipio },
            
            municipioRecidencia: this.municipioRecidencia,

            nacimientoDepartamento: this.nacimientoDepartamento,

            nacimientoMunicipio: this.nacimientoMunicipio,

            nombre1: "prueba",
            nombre2: "prueba",
            numeroDocumento: 10000,
            telefono: "prueba",
            telefonoAcudiente: "prueba",

            unMunicipio: { 'idMunicipio': this.unMunicipio }
        };
        axios.post('http://localhost:8080/api/estudiante', data).then(
            res => {
                console.log(res)
                console.log(data)
            }
        ).catch(
            err => {
                console.log(err);
                console.log(data)
            }
        )
    };
    //---------------------------------------------------------------------------------//
    state = {
        Municipio: [],
        Departamento: []

    }
    componentDidMount() {
        axios
            .get('http://localhost:8080/api/municipios/listar')
            .then((response) => {
                console.log(response);
                this.setState({ Municipio: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:8080/api/departamento/listar')
            .then((response) => {
                console.log(response);
                this.setState({ Departamento: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Un municipio</label>
                    <select className="form-select" aria-label="Default select example" onChange={e => this.unMunicipio = e.target.value}>
                        {this.state.Municipio.map(municipios => (
                            <option key={municipios.idMunicipio} value={municipios.idMunicipio}>{municipios.nombre}</option>
                        )
                        )}
                    </select>

                    <label>Municipios residencias</label>
                    <select className="form-select" aria-label="Default select example" onChange={e => this.municipioRecidencia = e.target.value}>
                        {this.state.Municipio.map(municipios => (
                            <option key={municipios.nombre} value={municipios.nombre}>{municipios.nombre}</option>
                        )
                        )}
                    </select>

                    <label>Departamento nacimiento </label>
                    <select className="form-select" aria-label="Default select example" onChange={e => this.nacimientoDepartamento = e.target.value}>
                        {this.state.Departamento.map(departamentos => (
                            <option key={departamentos.nombre} value={departamentos.nombre}>{departamentos.nombre}</option>
                        )
                        )}
                    </select>
                    <label>Municipios</label>
                    <select className="form-select" aria-label="Default select example" onChange={e => this.nacimientoMunicipio = e.target.value}>
                        {this.state.Municipio.map(municipios => (
                            <option key={municipios.nombre} value={municipios.nombre}>{municipios.nombre}</option>
                        )
                        )}
                    </select>
                    <button >Enviar</button>
                </form>
            </div >
        )
    }
}
