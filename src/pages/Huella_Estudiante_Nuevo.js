/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Huella_Estudiante_Nuevo from "../componentes/Contenido_Huella_Estudiante_Nuevo";

class Huella_Estudiante_Nuevo extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Huella_Estudiante_Nuevo />
      </>
    )
  }
}
export default Huella_Estudiante_Nuevo;