import { Routes, Route, Navigate } from 'react-router-dom'
import './app.css'

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
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/:tipo' element={<Paginacion />} />
        <Route path='/:tipo/:id' element={<Detalle />} />
      </Routes>
    </>
  )
}

export default App
