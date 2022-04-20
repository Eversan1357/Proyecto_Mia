import axios from 'axios';
import React, { Component } from 'react'

export default class contenido_selects extends Component {

    state = {
        documento: [],
        departamento: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/municipios/listar')
            .then((response) => {
                console.log(response);
                this.setState({ documento: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:8080/api/departamento/listar')
            .then((response) => {
                console.log(response);
                this.setState({ departamento: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <label>Tipo Documento</label>
                <select className="form-select" aria-label="Default select example" onChange={this.handleChange} >
                    {this.state.documento.map(documentos => (
                        <option key={documentos.id_municipio} value={documentos.nombre}>{documentos.nombre}</option>
                    )
                    )}
                </select>
                <label>Tipo Departamento</label>
                <select className="form-select" aria-label="Default select example">
                    {this.state.departamento.map(departamentos => (
                        <option key={departamentos.id_departamento} value={departamentos.nombre}>{departamentos.nombre}</option>
                    )
                    )}
                </select>
            </div>
        )
    }
}
