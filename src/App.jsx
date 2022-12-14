import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Layout from './layout/Layout'
import NuevoCliente from './pages/NuevoCliente'
import EditarCliente from './pages/EditarCliente'
import VerCliente from './pages/VerCliente'
import Inicio from './pages/Inicio'

function App() {

  console.log(import.meta.env)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio/>}/>
          <Route path="nuevo" element={<NuevoCliente />}/>
          <Route path="editar/:id" element={<EditarCliente />}/>
          <Route path=":id" element={<VerCliente />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
