/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Roles from "../componentes/Contenido_Roles";

class Roles extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Roles />
      </>
    )
  }
}
export default Roles;