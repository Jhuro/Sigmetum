import React from "react";
import ButtonPrincipal from "./ButtonPrincipal";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showLoginError, setLoginError] = useState(false);

    const handleLogin = async () => {
      try {
        const response = await fetch('http://localhost:8000/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error(response.message);
        }
  
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/cargar-archivos');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setLoginError(true);
      }
    };

    return(

        <div className="bg-[#F9FBFA] p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-left text-[#15B659] tracking-tight px-4 pb-3 pt-5">Iniciar sesión</h2>
                <form className="flex flex-col">
                <div className="mb-4 px-4">
                    <label className="block text-[#111418] text-base font-medium mb-2">
                    Usuario
                    </label>
                    <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-input w-full h-12 px-3 border border-[#15B659] rounded-lg placeholder:text-[#99BBA8] text-[#0C1811] focus:outline-none"
                    />
                </div>
                <div className="mb-4 px-4">
                    <label className="block text-[#0C1811] text-base font-medium mb-2">
                    Contraseña
                    </label>
                    <div className="flex space-x-4 w-full border border-[#15B659] rounded-lg">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input w-full rounded-lg h-12 px-3 placeholder:text-[#99BBA8] bg-[#F9FBFA] text-[#0C1811] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[#15B659] px-2"
                      >
                        {showPassword ? "Ocultar" : "Mostrar"}
                      </button>
                    </div>
                </div>
                {
                  showLoginError &&
                  (
                    <div className="flex justify-center px-4 mb-4">  
                      <span className="text-[#15B659] px-2">
                        Verifique el usuario y/o contraseña
                      </span>
                    </div>
                  )
                }
                </form>
                <div className="flex justify-center px-4"> 
                  <ButtonPrincipal text="Iniciar sesión" onClick={ handleLogin }/>
                </div>
            </div>
    );
};

export default LoginForm;