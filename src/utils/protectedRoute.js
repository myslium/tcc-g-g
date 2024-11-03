import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

  
    const isTokenValid = (token) => {
        if (!token) return false;

        try {
            const decoded = jwtDecode(token); 
            return decoded.exp * 1000 > Date.now();
        } catch (error) {
            return false; 
        }
    };

    if (!isTokenValid(token)) {
        return <Navigate to="/login" />;
    }

    return children;
}
