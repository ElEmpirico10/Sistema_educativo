import { useState } from 'react';
import { Search, User, Menu, Settings, LogOut, Users, GraduationCap, BookOpen, ClipboardCheck, Award, Palette, Home, Clock, CheckSquare } from 'lucide-react';

export default function AdminDashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeTab, setActiveTab] = useState('inicio');

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
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100
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
      gap: '1rem',
      minWidth: '260px'
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
      fontSize: '14px',
      textAlign: 'left'
    },
    actionBar: {
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%',
      position: 'fixed',
      top: '64px',
      left: 0,
      right: 0,
      zIndex: 99,
      borderBottom: '1px solid #90CAF9'
    },
    actionBarContent: {
      padding: '0 1rem',
      display: 'flex',
      gap: '0.5rem',
      height: '56px',
      alignItems: 'center',
      paddingLeft: '260px',
      boxSizing: 'border-box'
    },
    tabButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.625rem 1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '14px',
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    mainWrapper: {
      display: 'flex',
      marginTop: '120px',
      minHeight: 'calc(100vh - 120px)',
      width: '100%'
    },
    sidebar: {
      width: '260px',
      backgroundColor: 'white',
      boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
      padding: '1.5rem 0',
      position: 'fixed',
      left: 0,
      top: '120px',
      bottom: 0,
      overflowY: 'auto'
    },
    sidebarButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.875rem 1.5rem',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '15px',
      color: '#37474F',
      textAlign: 'left',
      fontWeight: '500'
    },
    mainContent: {
      flex: 1,
      marginLeft: '260px',
      padding: '2rem',
      width: 'calc(100% - 260px)',
      boxSizing: 'border-box'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    },
    statIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#37474F',
      marginBottom: '0.25rem'
    },
    statLabel: {
      fontSize: '14px',
      color: '#1E88E5',
      fontWeight: '500'
    },
    welcomeCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1E88E5',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: '16px',
      color: '#37474F'
    }
  };

  const getTabButtonStyle = (tab) => ({
    ...styles.tabButton,
    backgroundColor: activeTab === tab ? '#90CAF9' : 'transparent',
    color: activeTab === tab ? '#37474F' : '#1E88E5'
  });

  const getSidebarButtonStyle = (section) => ({
    ...styles.sidebarButton,
    backgroundColor: activeSection === section ? '#90CAF9' : 'transparent',
    borderLeft: activeSection === section ? '4px solid #1E88E5' : '4px solid transparent'
  });

  const handleTabHover = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = '#FFF8E1';
    }
  };

  const handleTabLeave = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const handleSidebarHover = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = '#FFF8E1';
    }
  };

  const handleSidebarLeave = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const statsData = [
    { icon: Users, label: 'Estudiantes', number: 1247, color: '#1E88E5' },
    { icon: GraduationCap, label: 'Profesores', number: 87, color: '#90CAF9' },
    { icon: User, label: 'Secretarias', number: 12, color: '#37474F' }
  ];

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.navTop}>
            <div style={styles.leftSection}>
              <div style={styles.logo}>A</div>
              <h2 style={{ color: '#FFF8E1', margin: 0, fontSize: '18px', fontWeight: '600' }}>
                Panel de Administración
              </h2>
            </div>

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
                      Administrador
                    </p>
                    <p style={{fontSize: '14px', color: '#1E88E5', margin: '4px 0 0 0'}}>
                      admin@escuela.com
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

      {/* Action Bar */}
      <div style={styles.actionBar}>
        <div style={styles.actionBarContent}>
          <button
            style={getTabButtonStyle('inicio')}
            onClick={() => setActiveTab('inicio')}
            onMouseEnter={(e) => handleTabHover(e, activeTab === 'inicio')}
            onMouseLeave={(e) => handleTabLeave(e, activeTab === 'inicio')}
          >
            <Home size={20} />
            <span>Inicio</span>
          </button>

          <button
            style={getTabButtonStyle('horario')}
            onClick={() => setActiveTab('horario')}
            onMouseEnter={(e) => handleTabHover(e, activeTab === 'horario')}
            onMouseLeave={(e) => handleTabLeave(e, activeTab === 'horario')}
          >
            <Clock size={20} />
            <span>Horario</span>
          </button>

          <button
            style={getTabButtonStyle('tareas')}
            onClick={() => setActiveTab('tareas')}
            onMouseEnter={(e) => handleTabHover(e, activeTab === 'tareas')}
            onMouseLeave={(e) => handleTabLeave(e, activeTab === 'tareas')}
          >
            <CheckSquare size={20} />
            <span>Tareas</span>
          </button>
        </div>
      </div>

      {/* Main Wrapper with Sidebar */}
      <div style={styles.mainWrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <button
            style={getSidebarButtonStyle('profesores')}
            onClick={() => setActiveSection('profesores')}
            onMouseEnter={(e) => handleSidebarHover(e, activeSection === 'profesores')}
            onMouseLeave={(e) => handleSidebarLeave(e, activeSection === 'profesores')}
          >
            <GraduationCap size={22} color={activeSection === 'profesores' ? '#1E88E5' : '#37474F'} />
            <span>Profesores</span>
          </button>

          <button
            style={getSidebarButtonStyle('estudiantes')}
            onClick={() => setActiveSection('estudiantes')}
            onMouseEnter={(e) => handleSidebarHover(e, activeSection === 'estudiantes')}
            onMouseLeave={(e) => handleSidebarLeave(e, activeSection === 'estudiantes')}
          >
            <Users size={22} color={activeSection === 'estudiantes' ? '#1E88E5' : '#37474F'} />
            <span>Estudiantes</span>
          </button>

          <button
            style={getSidebarButtonStyle('cursos')}
            onClick={() => setActiveSection('cursos')}
            onMouseEnter={(e) => handleSidebarHover(e, activeSection === 'cursos')}
            onMouseLeave={(e) => handleSidebarLeave(e, activeSection === 'cursos')}
          >
            <BookOpen size={22} color={activeSection === 'cursos' ? '#1E88E5' : '#37474F'} />
            <span>Cursos</span>
          </button>

          <button
            style={getSidebarButtonStyle('asistencias')}
            onClick={() => setActiveSection('asistencias')}
            onMouseEnter={(e) => handleSidebarHover(e, activeSection === 'asistencias')}
            onMouseLeave={(e) => handleSidebarLeave(e, activeSection === 'asistencias')}
          >
            <ClipboardCheck size={22} color={activeSection === 'asistencias' ? '#1E88E5' : '#37474F'} />
            <span>Asistencias</span>
          </button>

          <button
            style={getSidebarButtonStyle('certificados')}
            onClick={() => setActiveSection('certificados')}
            onMouseEnter={(e) => handleSidebarHover(e, activeSection === 'certificados')}
            onMouseLeave={(e) => handleSidebarLeave(e, activeSection === 'certificados')}
          >
            <Award size={22} color={activeSection === 'certificados' ? '#1E88E5' : '#37474F'} />
            <span>Certificados</span>
          </button>

          <button
            style={getSidebarButtonStyle('personalizacion')}
            onClick={() => setActiveSection('personalizacion')}
            onMouseEnter={(e) => handleSidebarHover(e, activeSection === 'personalizacion')}
            onMouseLeave={(e) => handleSidebarLeave(e, activeSection === 'personalizacion')}
          >
            <Palette size={22} color={activeSection === 'personalizacion' ? '#1E88E5' : '#37474F'} />
            <span>Personalización</span>
          </button>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>
          <div style={styles.welcomeCard}>
            <h1 style={styles.title}>Bienvenido al Panel de Administración</h1>
            <p style={styles.subtitle}>Gestiona tu institución educativa desde un solo lugar</p>
          </div>

          <div style={styles.statsGrid}>
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  style={styles.statCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{...styles.statIcon, backgroundColor: stat.color + '20'}}>
                    <IconComponent size={24} color={stat.color} />
                  </div>
                  <div style={styles.statNumber}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div style={styles.welcomeCard}>
            <h2 style={{...styles.title, fontSize: '22px', marginBottom: '1rem'}}>
              Sección: {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>
            <p style={styles.subtitle}>
              Tab activa: <strong>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</strong>
            </p>
            <p style={styles.subtitle}>
              Aquí se mostrará el contenido cuando conectes con Laravel.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}