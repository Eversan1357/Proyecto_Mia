/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Generar_Reportes from "../componentes/Contenido_Generar_Reportes";

class Generar_Reportes extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Generar_Reportes />
      </>
    )
  }
}
export default Generar_Reportes;