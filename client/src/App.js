import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.js'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/carrello' element={<Home />} />
        <Route path='/cerca' element={<Home />} />
        <Route path='/ordini' element={<Home />} />
        <Route path='/profilo' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
