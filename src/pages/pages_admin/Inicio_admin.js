/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion_admin from '../../componentes/Componentes_admin/Navegacion_admin'
import Contenido_Inicio from '../../componentes/Contenido_Inicio';

export default class Inicio_admin extends React.Component {
  render() {
    return (
      <>
        <Navegacion_admin />
        <Contenido_Inicio />
      </>
    )
  }
}
