import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JuegoUno from './componentes/JuegoUno'
import JuegoDos from './componentes/JuegoDos'
import JuegoTres from './componentes/JuegoTres';
import Informacion from './componentes/Informacion';
import Layout from './componentes/Layout';
import PuntosVerdes from './componentes/PuntosVerdes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/informacion' element={<Informacion />} ></Route>
            <Route path='/JuegoUno' element={<JuegoUno />}></Route>
            <Route path='/JuegoDos' element={<JuegoDos />} ></Route>
            <Route path='/JuegoTres' element={<JuegoTres />} ></Route>
            <Route path='/PuntosVerdes' element={<PuntosVerdes />} ></Route>
            <Route path='*' element={<h1>Not Found</h1>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
