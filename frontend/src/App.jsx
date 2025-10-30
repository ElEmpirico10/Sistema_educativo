import React from 'react';
// importa las herramientas de ruteo, ahora incluyendo 'Navigate'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 

import LoginContainer from './components/LoginContainer';
import RegisterContainer from './components/RegisterContainer'; 
import AdminDashboard from './pages/admin_panel/AdminDashboard';
import StudentDashboard from './pages/student_panel/StudentDashboard';
import './login-style.css'; 

//Logica de los roles
const ProtectedRoute = ({ children, requiredRole }) => {
    // Obtenemos el rol y el token que se guardaron en LoginForm.jsx
    const userRole = localStorage.getItem('user_role');
    const authToken = localStorage.getItem('auth_token');

    // Si no hay token, el usuario no está logueado -> Redirigir a Login
    if (!authToken) {
        return <Navigate to="/login" replace />;
    }

    // Si el rol del usuario NO coincide con el rol requerido
    if (userRole !== requiredRole) {
        // Lo enviamos a la ruta que le corresponde, si tiene alguna.
        if (userRole === 'estudiante') {
            return <Navigate to="/student/dashboard" replace />;
        }
        if (userRole === 'admin') {
            return <Navigate to="/admin/dashboard" replace />;
        }
        
        // Si no tiene un rol válido, lo mandamos al login
        return <Navigate to="/login" replace />; 
    }

    // Si el usuario está logueado Y tiene el rol correcto, muestra el Dashboard.
    return children;
};

// -------------------------------------------------------------------
// 2. FUNCIÓN APP - USANDO LAS RUTAS PROTEGIDAS
// -------------------------------------------------------------------
function App() {
    return (
        <Router>
          <div className="App">
            <Routes>
              {/* Rutas Públicas */}
              <Route path="/" element={<LoginContainer />} /> 
              <Route path="/login" element={<LoginContainer />} /> 
              <Route path="/register" element={<RegisterContainer />} />

              {/* Rutas PROTEGIDAS - Rol Administrador */}
              <Route 
                  path="/admin/dashboard" 
                  element={
                      <ProtectedRoute requiredRole="admin">
                          <AdminDashboard />
                      </ProtectedRoute>
                  } 
              />

              {/* Rutas PROTEGIDAS - Rol Estudiante */}
              <Route 
                  path="/student/dashboard" 
                  element={
                      <ProtectedRoute requiredRole="estudiante">
                          <StudentDashboard />
                      </ProtectedRoute>
                  } 
              />
            
            </Routes>
          </div>
        </Router>
    );
}

export default App;