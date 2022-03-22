import axios from 'axios';
import React, { Component } from 'react'




export default class Contenido_Huella2 extends Component {

    handleSubmit = e => {

        e.preventDefault();

        const data ={
            nombre1: this.nombre1
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
            <form onSubmit={this.handleSubmit}>
                <h3>Ingreso de Estudiantes</h3>
                <div className='form-control'>
                    <label>Nombre</label>
                    <input type="text" className='form-control' placeholder='primer nombre'
                    onChange={e => this.nombre1 = e.target.value}/>
                </div>
                <button className='btn btn-primary btn-block'>Registrar</button>
            </form>
        )
    }

}