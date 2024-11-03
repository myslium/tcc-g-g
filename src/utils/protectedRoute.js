import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Correção aqui

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    console.log('Token:', token);

    if (!token || !isTokenValid(token)) {
        return <Navigate to="/login" />;
    }

    return children;
}

function isTokenValid(token) {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    } catch (e) {
        console.error('Erro ao decodificar token:', e);
        return false;
    }
}
