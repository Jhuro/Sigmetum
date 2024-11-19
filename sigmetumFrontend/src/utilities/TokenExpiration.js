import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return true;
  }
};

const useTokenExpirationHandler = (token) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (token && isTokenExpired(token)) {
        alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
        navigate('/login');
      }
    }, [token, navigate]);
  };
  
  export default useTokenExpirationHandler;