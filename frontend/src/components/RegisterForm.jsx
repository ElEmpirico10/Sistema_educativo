// src/components/RegisterForm.jsx

import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
// Asegúrate de que este componente esté en una ruta donde se carguen tus estilos CSS

const RegisterForm = () => {
    
    // Estado para guardar todos los datos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // ¡Importante! Laravel espera este nombre
    });

    // Estado para mostrar mensajes al usuario (éxito o error)
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Función para manejar los cambios en todos los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData, // Mantiene los otros campos
            [e.target.name]: e.target.value // Actualiza el campo actual
        });
        setMessage(''); // Limpia el mensaje al empezar a escribir
    };

    // Función que se ejecutará cuando el usuario presione el botón "REGISTRARSE"
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setMessage('Procesando registro...');
        setIsError(false);

        // La URL de tu API de Laravel. Debe ser '/api/register'
        const API_URL = '/api/register'; 

        try {
            // Petición POST a la API de Laravel
            const response = await axios.post(API_URL, formData); 

            // Si la respuesta es exitosa (código 201 Created de Laravel)
            setMessage('✅ ¡Registro exitoso! Ya puedes iniciar sesión.');
            setIsError(false);
            
            // Opcional: Limpiar el formulario después del éxito
            setFormData({ name: '', email: '', password: '', password_confirmation: '' });

        } catch (error) {
            setIsError(true);
            
            // Manejo de errores de validación de Laravel (ej: email ya existe, contraseñas no coinciden)
            if (error.response && error.response.status === 422) {
                // Combina todos los mensajes de error en uno
                const errorMessages = Object.values(error.response.data.errors).flat().join(' ');
                setMessage(`Error de validación: ${errorMessages}`);
            } else if (error.response) {
                // Otros errores del servidor
                setMessage(`Error ${error.response.status}: ${error.response.data.message || 'Error al registrar.'}`);
            } else {
                // Error de conexión
                setMessage('Error de conexión. Verifica que el servidor de Laravel esté activo y CORS esté configurado.');
            }
        }
    };


    return (
        // Reutilizamos la clase 'ctn-form' de tu CSS para el estilo
        <div className="ctn-form"> 
            
            <h1 className="tittle">Plataforma Educativa</h1>
            <h2 className="subtitle">Crea tu Cuenta</h2>

            {/* Muestra el mensaje de éxito o error, usando tus clases 'status-message' */}
            {message && (
                <div className={`status-message ${isError ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* CAMPO: Email */}
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email"
                        required 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* CAMPO: Contraseña */}
                <div className="input-group">
                    <label htmlFor="password">Contraseña (Mín. 8 caracteres)</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        required 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* CAMPO: Confirmar Contraseña */}
                <div className="input-group">
                    <label htmlFor="password_confirmation">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        id="password_confirmation" 
                        name="password_confirmation" // ¡IMPORTANTE! Debe coincidir con Laravel
                        required 
                        value={formData.password_confirmation}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn-login">
                    REGISTRARSE
                </button>
            </form>

            {/* Footer */}
            <p className="text-footer">
                ¿Ya tienes cuenta? 
                <Link to="/login"> Inicia Sesión aquí</Link> 
            </p>
        </div>
    );
};

export default RegisterForm;