/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Cargar_Datos from "../componentes/Contenido_Cargar_Datos";

class CargarDatos extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Cargar_Datos />
      </>
    )
  }
}
export default CargarDatos;