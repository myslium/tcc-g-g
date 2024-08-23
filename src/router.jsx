import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import SobreGeG from './pages/sobre';
import Vagas from './pages/vagas';
import Falecomconsultor from './pages/falecomconsultor';
import Login from './pages/login';



export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<SobreGeG/>} />
                <Route path='/vagas' element={<Vagas/>} />
                <Route path='/falecomconsultor' element={<Falecomconsultor />} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}