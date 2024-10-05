import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import SobreGeG from './pages/sobregeg';
import Vagas from './pages/vagas';
import Falecomconsultor from './pages/falecomconsultor';
import Login from './pages/login';
import Notificacoes from './admin/notificacoes';
import Gerenciamento from './admin/gerenciamento';
import Vagasadmin from './admin/gerenciandovagas';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<SobreGeG/>} />
                <Route path='/vagas' element={<Vagas/>} />
                <Route path='/falecomconsultor' element={<Falecomconsultor />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/admin/gerenciamento' element={<Gerenciamento/>} />
                <Route path='/admin/notificacoes' element={<Notificacoes/>} />
                <Route path='/admin/gerenciandovagas' element={<Vagasadmin/>} />



            </Routes>
        </BrowserRouter>
    );
}