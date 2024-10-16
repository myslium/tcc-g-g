import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import SobreGeG from './pages/sobregeg';
import Vagas from './pages/vagas';
import Falecomconsultor from './pages/falecomconsultor';
import Login from './pages/login';
import Notificacoes from './admin/notificacoes';
import Gerenciamento from './admin/gerenciamento';
import Vagasadmin from './admin/gerenciandovagas/index.jsx';
import ProtectedRoute from './componentes/protectedRoute/protectedRoute.js';
import Saibamais from './pages/saibamaisvaga/index.jsx';
import ConfirmarCandidato from './admin/confirmacao/index.jsx';


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
                  <Route path='/admin/vagasAdmin' element={
                     
                       
                     <ProtectedRoute>
                      <Vagasadmin/>
                     </ProtectedRoute>
                   
                     
                  } />

                  <Route path='/admin/confirmacao' element= {

                    <ProtectedRoute>
                        <ConfirmarCandidato/>
                    </ProtectedRoute>
                  }
                  />

                
            </Routes>
        </BrowserRouter>
    );
}
