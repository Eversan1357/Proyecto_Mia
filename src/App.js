/* eslint-disable react/jsx-pascal-case */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login'
import Inicio from './pages/Inicio'
import Sistema from './pages/Sistema'
import Archivos from './pages/Archivos'
import Cambiar_Clave from './pages/Cambiar_Clave'
import Cargar_Datos from './pages/Cargar_Datos'
import Permisos_Privilegios from './pages/Permisos_Privilegios'
import Roles from './pages/Roles'
import Usuarios from './pages/Usuarios'
import Hlogin from './pages/Hlogin'
import Huella_Estudiante_Nuevo from './pages/Huella_Estudiante_Nuevo'
import Instituciones from './pages/Instituciones'
import Buscar_Estudiante from './pages/Buscar_Estudiante'
import Generar_Reportes from './pages/Generar_Reportes'
import Facturacion from './pages/Facturacion'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/Inicio' element={<Inicio />} />
            <Route exact path='/Sistema' element={<Sistema />} />
            <Route exact path='/Archivos' element={<Archivos />} />
            <Route exact path='/Cambiar_Clave' element={<Cambiar_Clave />} />
            <Route exact path='/Cargar_Datos' element={<Cargar_Datos />} />
            <Route exact path='/Permisos_Privilegios' element={<Permisos_Privilegios />} />
            <Route exact path='/Roles' element={<Roles />} />
            <Route exact path='/Usuarios' element={<Usuarios />} />
            <Route exact path='/Hlogin' element={<Hlogin />} />
            <Route exact path='/Huella_Estudiante_Nuevo' element={<Huella_Estudiante_Nuevo />} />
            <Route exact path='/Instituciones' element={<Instituciones />} />
            <Route exact path='/Buscar_Estudiante' element={<Buscar_Estudiante />} />
            <Route exact path='/Generar_Reportes' element={<Generar_Reportes />} />
            <Route exact path='/Facturacion' element={<Facturacion />} />
          </Routes>
        </div>
      </Router>
    </ >
  );
}
export default App;

