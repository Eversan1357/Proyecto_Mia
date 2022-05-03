/* eslint-disable react/jsx-pascal-case */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login'
import Inicio from './pages/Inicio'
import Sistema from './pages/Sistema'
import Archivos from './pages/Archivos'
import Cambiar_Clave from './pages/Cambiar_Clave'
import Cargar_Datos from './pages/Cargar_Datos'
import Roles from './pages/Roles'
import Usuarios from './pages/Usuarios'
import Beneficio from './pages/Beneficio'
import Huella_Estudiante_Nuevo from './pages/Huella_Estudiante_Nuevo'
import Instituciones from './pages/Instituciones'
import Buscar_Estudiante from './pages/Buscar_Estudiante'
import Generar_Reportes from './pages/Generar_Reportes'
import Facturacion from './pages/Facturacion'

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/inicio' element={<Inicio />} />
          <Route exact path='/sistema' element={<Sistema />} />
          <Route exact path='/archivos' element={<Archivos />} />
          <Route exact path='/cambiar_Clave' element={<Cambiar_Clave />} />
          <Route exact path='/cargar_Datos' element={<Cargar_Datos />} />
          <Route exact path='/roles' element={<Roles />} />
          <Route exact path='/usuarios' element={<Usuarios />} />
          <Route exact path='/beneficio' element={<Beneficio />} />
          <Route exact path='/huella_Estudiante_Nuevo' element={<Huella_Estudiante_Nuevo />} />
          <Route exact path='/instituciones' element={<Instituciones />} />
          <Route exact path='/buscar_Estudiante' element={<Buscar_Estudiante />} />
          <Route exact path='/generar_Reportes' element={<Generar_Reportes />} />
          <Route exact path='/facturacion' element={<Facturacion />} />
        </Routes>
      </>
    </Router>
  );
}
export default App;

