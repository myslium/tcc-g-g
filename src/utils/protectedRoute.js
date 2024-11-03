import { Navigate } from 'react-router-dom';
import { decode } from "jwt-decode";

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token || !isTokenValid(token)) {
        return <Navigate to="/login" />;
    }

    return children;
}

function isTokenValid(token) {
    try {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    } catch (e) {
        return false;
    }
}
