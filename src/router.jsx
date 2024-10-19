import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import SobreGeG from './pages/sobregeg';
import Vagas from './pages/vagas';
import Falecomconsultor from './pages/falecomconsultor';
import Login from './pages/login';
import Notificacoes from './admin/notificacoes';
import Gerenciamento from './admin/gerenciamento';
import VagasAdmin from './admin/gerenciandovagas/index.jsx';
import ProtectedRoute from './componentes/protectedRoute/protectedRoute.js';
import Saibamais from './pages/saibamaisvaga/index.jsx';
import ConfirmarCandidato from './admin/confirmacao/index.jsx';
import Robo from './pages/bot/index.jsx';
import NotFound from './pages/noterro';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<SobreGeG/>} />
                <Route path='/vagas' element={<Vagas/>} />
                <Route path='/falecomconsultor' element={<Falecomconsultor />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/saibamais' element={<Saibamais/>} />
                <Route path='/bot' element={<Robo/>} />
                <Route path='*' element={<NotFound/>} />


              
                <Route path='/admin/gerenciamento' element={
                       
                       
                    <ProtectedRoute>
                        <Gerenciamento />
                    </ProtectedRoute>
                  
                  
                } />
                <Route path='/admin/notificacoes' element={
                      
                        
                    <ProtectedRoute>
                        <Notificacoes />
                    </ProtectedRoute>         
                        
                    
                } />
                <Route path='/admin/gerenciamento/:id' element={
                     
                       
                   <ProtectedRoute>
                    <Gerenciamento />
                   </ProtectedRoute>
                 
                   
                } />
                  <Route path='/admin/gerenciandovagas' element={
                     
                       
                     <ProtectedRoute>
                      <VagasAdmin/>
                     </ProtectedRoute>
                   
                     
                  } />

                <Route path='/admin/confirmacao/:id' element= {

                    <ProtectedRoute>
                        <ConfirmarCandidato/>
                    </ProtectedRoute>
                    }
                />

                
            </Routes>
        </BrowserRouter>
    );
}
