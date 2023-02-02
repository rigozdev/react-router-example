/*Importamos Routes y Route para utilizarlos dentro main (que no me quedó claro
si se puede utilizar un componente vacío como tal para utilizar otras "páginas" en él*/
import {Routes, Route} from 'react-router-dom';

/*Importación de componentes */
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

/*Importación de Páginas */
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
