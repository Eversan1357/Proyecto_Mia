/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from "../componentes/Navegacion";
import Contenido_Inicio from '../componentes/Contenido_Inicio';
//import ListEstudiantes from '../componentes/ListEstudiantes';



class Inicio extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Inicio />
        {/*<ListEstudiantes />*/}
      </>
    )
  }
}
export default Inicio;