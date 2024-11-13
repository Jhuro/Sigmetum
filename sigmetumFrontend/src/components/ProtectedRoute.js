import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const response = await fetch('http://localhost:8000/auth', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok;
  };

  useEffect(() => {
    const checkAuth = async () => {
      const authValid = await fetchProtectedData();
      setIsAuthenticated(authValid);
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <p>Verificando autenticación...</p>; // O un spinner mientras se verifica
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;