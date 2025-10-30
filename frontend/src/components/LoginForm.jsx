// src/components/LoginForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
// 1. Importar useNavigate de react-router-dom
import { Link, useNavigate } from 'react-router-dom'; 

const LoginForm = () => {
    
    // 2. Inicializar la función de navegación (navigate)
    const navigate = useNavigate();
    
    // Estado para capturar los inputs y para mostrar mensajes al usuario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Función que se ejecuta cuando se presiona el botón "ACCEDER"
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setMessage('Iniciando sesión...');
        setIsError(false);

        const API_URL = '/api/login';

        try {
            // Petición POST a la API, enviando el email y el password
            const response = await axios.post(API_URL, {
                email: email,
                password: password
            });

            // Si la respuesta es exitosa (código 200)
            if (response.data.success) {
                setMessage(response.data.message);
                setIsError(false);
                
                // -----------------------------------------------------------
                // 🚀 INICIO DE LA LÓGICA DE ROL Y REDIRECCIÓN 🚀
                // -----------------------------------------------------------

                // Asumimos que la respuesta de Laravel tiene: 
                // response.data.user.role (con valor 'admin' o 'student')
                const userRole = response.data.user.role;
                
                // Opcional: Guardar token y rol en almacenamiento local para persistencia
                if (response.data.token) {
                    localStorage.setItem('auth_token', response.data.token);
                }
                localStorage.setItem('user_role', userRole);

                // Redirigir según el rol
                if (userRole === 'admin') {
                    // Redirige al dashboard del administrador
                    navigate('/admin/dashboard'); 
                } else if (userRole === 'estudiante') {
                    // Redirige al dashboard del estudiante
                    navigate('/student/dashboard');
                } else {
                    // Rol no reconocido, redirige a una ruta por defecto
                    navigate('/'); 
                }
                
                // -----------------------------------------------------------
                // 🛑 FIN DE LA LÓGICA DE ROL Y REDIRECCIÓN 🛑
                // -----------------------------------------------------------

            }

        } catch (error) {
            // Manejo de errores
            setIsError(true);
            if (error.response && error.response.status === 401) {
                setMessage(error.response.data.message || 'Credenciales inválidas. Inténtalo de nuevo.');
            } else {
                setMessage('Error de conexión. ¿Está tu servidor de Laravel activo?');
            }
        }
    };

    return (
        <div className="ctn-form">
            {/* ... (el resto del formulario es idéntico) ... */}
            <h1 className="tittle">Plataforma Educativa</h1>
            <h2 className="subtitle">Inicia Sesión</h2>
            
            {/* Muestra el mensaje de éxito o error */}
            {message && (
                <div className={`status-message ${isError ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                
                <div className="input-group">
                    <label htmlFor="username">Usuario o Email</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="email" 
                        required 
                        value={email} // Conecta el valor del input al estado
                        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado al escribir
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        value={password} // Conecta el valor del input al estado
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado al escribir
                    />
                </div>

                <button type="submit" className="btn-login">
                    ACCEDER
                </button>
            </form>

            <p className="text-footer">
                ¿No tienes cuenta? 
                <Link to="/register"> Regístrate aquí</Link> 
            </p>
        </div>
    );
};

export default LoginForm;