/* eslint-disable react/jsx-pascal-case */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from './pages/Login'
//Imports Admin
import Inicio_admin from './pages/pages_admin/Inicio_admin'
import Sistema_admin from './pages/pages_admin/Sistema_admin'
import Archivos_admin from './pages/pages_admin/Archivos_admin'
import Cambiar_Clave_admin from './pages/pages_admin/Cambiar_Clave_admin'
import Cargar_Datos_admin from './pages/pages_admin/Cargar_Datos_admin'
import Roles_admin from './pages/pages_admin/Roles_admin'
import Usuarios_admin from './pages/pages_admin/Usuarios_admin'
import Beneficio_admin from './pages/pages_admin/Beneficio_admin'
import Huella_Estudiante_Nuevo_admin from './pages/pages_admin/Huella_Estudiante_Nuevo_admin'
import Instituciones_admin from './pages/pages_admin/Instituciones_admin'
import Buscar_Estudiante_admin from './pages/pages_admin/Buscar_Estudiante_admin'
import Generar_Reportes_admin from './pages/pages_admin/Generar_Reportes_admin'
import Facturacion_admin from './pages/pages_admin/Facturacion_admin'
//Imports Contratista
import Buscar_Estudiante_contratista from './pages/pages_contratista/Buscar_Estudiante_contratista';
import Cambiar_Clave_contratista from './pages/pages_contratista/Cambiar_Clave_contratista';
import Facturacion_contratista from './pages/pages_contratista/Facturacion_contratista'
import Generar_Reportes_contratista from './pages/pages_contratista/Generar_Reportes_contratista'
import Inicio_contratista from './pages/pages_contratista/Inicio_contratista'
import Sistema_contratista from './pages/pages_contratista//Sistema_contratista'
//Imports Contratista
import Buscar_Estudiante_rector from './pages/pages_rector/Buscar_Estudiante_rector';
import Cambiar_Clave_rector from './pages/pages_rector/Cambiar_Clave_rector';
import Facturacion_rector from './pages/pages_rector/Facturacion_rector'
import Generar_Reportes_rector from './pages/pages_rector/Generar_Reportes_rector'
import Inicio_rector from './pages/pages_rector/Inicio_contratista'
import Sistema_rector from './pages/pages_rector/Sistema_contratista'
const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<Login />} />
          {/*Rutas Admin */}
          <Route exact path='/inicio_admin' element={<Inicio_admin />} />
          <Route exact path='/sistema_admin' element={<Sistema_admin />} />
          <Route exact path='/archivos_admin' element={<Archivos_admin />} />
          <Route exact path='/cambiar_Clave_admin' element={<Cambiar_Clave_admin />} />
          <Route exact path='/cargar_Datos_admin' element={<Cargar_Datos_admin />} />
          <Route exact path='/roles_admin' element={<Roles_admin />} />
          <Route exact path='/usuarios_admin' element={<Usuarios_admin />} />
          <Route exact path='/beneficio_admin' element={<Beneficio_admin />} />
          <Route exact path='/huella_Estudiante_Nuevo_admin' element={<Huella_Estudiante_Nuevo_admin />} />
          <Route exact path='/instituciones_admin' element={<Instituciones_admin />} />
          <Route exact path='/buscar_Estudiante_admin' element={<Buscar_Estudiante_admin />} />
          <Route exact path='/generar_Reportes_admin' element={<Generar_Reportes_admin />} />
          <Route exact path='/facturacion_admin' element={<Facturacion_admin />} />
          {/*Rutas Contratista */}
          <Route exact path='/buscar_estudiante_contratista' element={<Buscar_Estudiante_contratista />} />
          <Route exact path='/cambiar_clave_contratista' element={<Cambiar_Clave_contratista />} />
          <Route exact path='/facturacion_contratista' element={<Facturacion_contratista />} />
          <Route exact path='/generar_reportes_contratista' element={<Generar_Reportes_contratista />} />
          <Route exact path='/inicio_contratista' element={<Inicio_contratista />} />
          <Route exact path='/sistema_contratista' element={<Sistema_contratista />} />
          {/*Rutas Rector */}
          <Route exact path='/buscar_estudiante_rector' element={<Buscar_Estudiante_rector />} />
          <Route exact path='/cambiar_clave_rector' element={<Cambiar_Clave_rector />} />
          <Route exact path='/facturacion_rector' element={<Facturacion_rector />} />
          <Route exact path='/generar_reportes_rector' element={<Generar_Reportes_rector />} />
          <Route exact path='/inicio_rector' element={<Inicio_rector />} />
          <Route exact path='/sistema_rector' element={<Sistema_rector />} />
        </Routes>
      </>
    </Router>
  );
}
export default App;

