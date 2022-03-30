import { Component } from 'react';
import axios from 'axios';

class ListEstudiantes extends Component {

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
            <form className="form-group">
                <label>Tipo De Documento</label>
                <select className="form-select" aria-label="Default select example" onChange={this.handleChange}>
                    {this.state.documento.map((documentos) => {
                        return (
                            <option key={documentos.idTipoDocumento}
                            value={documentos.nombre}>{documentos.nombre}</option>
                        )
                    })
                    }
                </select>
                <div id="Role_Date-box">
                    <label>{this.state.documentoTipo}</label>
                </div>
            </form>
        );
    }
}
export default ListEstudiantes