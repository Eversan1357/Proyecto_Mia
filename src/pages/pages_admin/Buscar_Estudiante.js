/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Buscar_Estudiante from "../componentes/Contenido_Buscar_Estudiante";

class Buscar_Estudiante extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Buscar_Estudiante />
      </>
    )
  }
}
export default Buscar_Estudiante;