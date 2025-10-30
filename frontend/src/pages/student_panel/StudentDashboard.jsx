import { useState } from 'react';
import { Search, Home, Clock, CheckSquare, User, Settings, LogOut, Menu } from 'lucide-react';

export default function StudentDashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#F5F5F5',
      margin: 0,
      padding: 0,
      width: '100vw',
      position: 'relative'
    },
    navbar: {
      backgroundColor: '#1E88E5',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%'
    },
    navContent: {
      padding: '0 1rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    navTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      flexShrink: 0
    },
    logo: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#37474F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      flexShrink: 0
    },
    navButtons: {
      display: 'flex',
      gap: '0.5rem',
      flexShrink: 0
    },
    navButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '14px',
      fontWeight: '500',
      whiteSpace: 'nowrap'
    },
    searchContainer: {
      flex: 1,
      maxWidth: '600px',
      margin: '0 2rem',
      position: 'relative'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#37474F',
      pointerEvents: 'none'
    },
    searchInput: {
      width: '100%',
      padding: '0.5rem 1rem 0.5rem 2.5rem',
      borderRadius: '9999px',
      border: 'none',
      backgroundColor: '#FFF8E1',
      color: '#37474F',
      fontSize: '14px',
      outline: 'none',
      transition: 'box-shadow 0.3s',
      boxSizing: 'border-box'
    },
    userButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      borderRadius: '9999px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      flexShrink: 0
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#37474F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dropdown: {
      position: 'absolute',
      right: 0,
      marginTop: '0.5rem',
      width: '256px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: '1px solid #90CAF9',
      overflow: 'hidden',
      zIndex: 1000
    },
    dropdownHeader: {
      padding: '0.75rem 1rem',
      backgroundColor: '#FFF8E1',
      borderBottom: '1px solid #90CAF9'
    },
    dropdownButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#37474F',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '14px'
    },
    main: {
      padding: '2rem 1rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    mainContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '2rem'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#1E88E5',
      marginBottom: '1rem'
    },
    text: {
      color: '#37474F',
      fontSize: '16px'
    }
  };

  const getNavButtonStyle = (section) => ({
    ...styles.navButton,
    backgroundColor: activeSection === section ? '#90CAF9' : 'transparent',
    color: activeSection === section ? '#37474F' : '#FFF8E1'
  });

  const handleNavHover = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = 'rgba(144, 202, 249, 0.2)';
    }
  };

  const handleNavLeave = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.navTop}>
            {/* Logo y Navegación */}
            <div style={styles.leftSection}>
              <div style={styles.logo}>E</div>

              {/* Navigation */}
              <div style={styles.navButtons}>
                <button
                  style={getNavButtonStyle('inicio')}
                  onClick={() => setActiveSection('inicio')}
                  onMouseEnter={(e) => handleNavHover(e, activeSection === 'inicio')}
                  onMouseLeave={(e) => handleNavLeave(e, activeSection === 'inicio')}
                >
                  <Home size={20} />
                  <span>Inicio</span>
                </button>

                <button
                  style={getNavButtonStyle('horario')}
                  onClick={() => setActiveSection('horario')}
                  onMouseEnter={(e) => handleNavHover(e, activeSection === 'horario')}
                  onMouseLeave={(e) => handleNavLeave(e, activeSection === 'horario')}
                >
                  <Clock size={20} />
                  <span>Horario</span>
                </button>

                <button
                  style={getNavButtonStyle('tareas')}
                  onClick={() => setActiveSection('tareas')}
                  onMouseEnter={(e) => handleNavHover(e, activeSection === 'tareas')}
                  onMouseLeave={(e) => handleNavLeave(e, activeSection === 'tareas')}
                >
                  <CheckSquare size={20} />
                  <span>Tareas</span>
                </button>
              </div>
            </div>

            {/* Barra de búsqueda */}
            <div style={styles.searchContainer}>
              <div style={styles.searchIcon}>
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                style={styles.searchInput}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(144, 202, 249, 0.5)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            {/* Menú de usuario */}
            <div style={{position: 'relative'}}>
              <button
                style={{
                  ...styles.userButton,
                  backgroundColor: showUserMenu ? 'rgba(144, 202, 249, 0.2)' : 'transparent'
                }}
                onClick={() => setShowUserMenu(!showUserMenu)}
                onMouseEnter={(e) => !showUserMenu && (e.currentTarget.style.backgroundColor = 'rgba(144, 202, 249, 0.2)')}
                onMouseLeave={(e) => !showUserMenu && (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div style={styles.userAvatar}>
                  <User color="white" size={20} />
                </div>
                <Menu color="#FFF8E1" size={20} />
              </button>

              {showUserMenu && (
                <div style={styles.dropdown}>
                  <div style={styles.dropdownHeader}>
                    <p style={{fontWeight: '600', color: '#37474F', margin: 0}}>
                      Estudiante Demo
                    </p>
                    <p style={{fontSize: '14px', color: '#1E88E5', margin: '4px 0 0 0'}}>
                      estudiante@ejemplo.com
                    </p>
                  </div>

                  <div style={{padding: '0.5rem 0'}}>
                    <button
                      style={styles.dropdownButton}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFF8E1'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Settings size={18} color="#1E88E5" />
                      <span>Configurar perfil</span>
                    </button>

                    <button
                      style={{...styles.dropdownButton, borderTop: '1px solid #F5F5F5'}}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFF8E1'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <LogOut size={18} color="#1E88E5" />
                      <span>Cerrar sesión</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main style={styles.main}>
        <div style={styles.mainContent}>
          <div style={styles.card}>
            <h1 style={styles.title}>
              {activeSection === 'inicio' && 'Bienvenido a tu Dashboard'}
              {activeSection === 'horario' && 'Tu Horario de Clases'}
              {activeSection === 'tareas' && 'Tus Tareas Pendientes'}
            </h1>
            <p style={styles.text}>
              Esta es una vista previa del dashboard. Aquí se mostrará el contenido de la sección{' '}
              <span style={{fontWeight: '600', color: '#1E88E5'}}>{activeSection}</span> cuando conectes con Laravel.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}