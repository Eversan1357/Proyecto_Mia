import React, { useState } from 'react'

const ListEstudiantes = () => {

    const [estudiantes, setEstudiantes] = useState([])

    return (
        <div className='container'>

            <h1 className='text-center'>Lista de empleados</h1>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>id</th>
                    <th>nombre</th>
                    <th>apellido</th>
                    <th>email</th>
                </thead>
                <tbody>
                    {
                        estudiantes.map(
                            estudiante =>
                            <tr key={estudiante.id}>
                                <td> {estudiante.nombre}</td>
                                <td> {estudiante.apellido}</td>
                                <td> {estudiante.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEstudiantes