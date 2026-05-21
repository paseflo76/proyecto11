import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Paginacion from './pages/Paginacion'
import Header from './Components/Header/Header'
import BackgroundStars from './Components/BackgroundStars/BackgroundStars'
import Detalle from './Components/Detalle/Detalle'

const App = () => {
  return (
    <>
      <BackgroundStars />
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/character' />} />
        <Route path='/character' element={<Paginacion />} />

        <Route path='/status/:status' element={<Paginacion />} />
        <Route path='/species/:species' element={<Paginacion />} />

        <Route path='/character/:id' element={<Detalle />} />
      </Routes>
    </>
  )
}

export default App
