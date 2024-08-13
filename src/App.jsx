import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Inicio from '../src/Pages/Inicio';
import Nosotros from './Pages/Nosotros';
import Alquileres from "./Pages/Alquileres";
import Contactanos from "./Pages/Contactanos";
import Detail from './Pages/Detail';
import Layout from './Components/Products/Layout';
import Donaciones from './Pages/Donaciones'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/Noticias' />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Cursos' />
        <Route path='/Alquileres' element={<Layout />}>
          <Route index element={<Alquileres />} />
          <Route path=':slug' element={<Detail />} />
        </Route>
        <Route path='/Donaciones' element={<Donaciones />}/>
        <Route path='/Contactanos' element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
