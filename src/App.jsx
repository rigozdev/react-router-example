import {Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Navbar></Navbar>

      <main className="main-container">
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contacto' element={<Contacto/>}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

      </main>
      <Footer></Footer>
    </>

  )
}

export default App
