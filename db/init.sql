CREATE TABLE Tb_rol (
    id_rol SERIAL PRIMARY KEY,
    nombre VARCHAR(30)
);

CREATE TABLE Tb_usuario (
    id_usuario SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    id_rol INT,
    FOREIGN KEY (id_rol) REFERENCES Tb_rol(id_rol)
);

CREATE TABLE Tb_administrador (
    id_administrador SERIAL PRIMARY KEY,
    no_documento INT NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    telefono VARCHAR(20),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Tb_usuario(id_usuario)
);

CREATE TABLE Tb_profesor (
    id_profesor SERIAL PRIMARY KEY,
    no_documento INT UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    titulo VARCHAR(100),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Tb_usuario(id_usuario)
);

CREATE TABLE Tb_curso (
    id_curso SERIAL PRIMARY KEY,
    ficha VARCHAR(50) NOT NULL,
    nombre_curso VARCHAR(100) NOT NULL,
    id_profesor INT,
    FOREIGN KEY (id_profesor) REFERENCES Tb_profesor(id_profesor)
);

CREATE TABLE Tb_estudiante (
    id_estudiante SERIAL PRIMARY KEY,
    no_documento INT UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    fecha_ingreso DATE NOT NULL,
    direccion VARCHAR(100),
    telefono VARCHAR(20),
    id_usuario INT,
    id_curso INT,
    FOREIGN KEY (id_usuario) REFERENCES Tb_usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES Tb_curso(id_curso)
);

CREATE TABLE Tb_padre_familia (
    id_padre_familia SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Tb_usuario(id_usuario)
);

CREATE TYPE estado_asistencia AS ENUM ('presente', 'excusa', 'ausente');

CREATE TABLE Tb_asistencia (
    id_asistencia SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    presente estado_asistencia,
    id_curso INT,
    id_estudiante INT,
    FOREIGN KEY (id_curso) REFERENCES Tb_curso(id_curso),
    FOREIGN KEY (id_estudiante) REFERENCES Tb_estudiante(id_estudiante)
);

CREATE TABLE Tb_expediente_estudiante (
    id_expediente_estudiante SERIAL PRIMARY KEY,
    documento VARCHAR(500) NOT NULL,
    id_estudiante INT,
    FOREIGN KEY (id_estudiante) REFERENCES Tb_estudiante(id_estudiante)
);

CREATE TYPE estado_est AS ENUM ('activo', 'inactivo');

CREATE TABLE Tb_estado_estudiante (
    id_estado_estudiante SERIAL PRIMARY KEY,
    estado estado_est,
    id_estudiante INT,
    FOREIGN KEY (id_estudiante) REFERENCES Tb_estudiante(id_estudiante)
);

-- 🔹 Tb_competencia (antes Tb_asignaturas)
CREATE TABLE Tb_competencia (
    id_competencia SERIAL PRIMARY KEY,
    nombre VARCHAR(79) NOT NULL,
    id_profesor INT,
    FOREIGN KEY (id_profesor) REFERENCES Tb_profesor(id_profesor)
);

-- 🔹 Relación curso - competencia
CREATE TABLE Tb_competencia_curso (
    id_curso INT,
    id_competencia INT,
    PRIMARY KEY (id_curso, id_competencia),
    FOREIGN KEY (id_curso) REFERENCES Tb_curso(id_curso),
    FOREIGN KEY (id_competencia) REFERENCES Tb_competencia(id_competencia)
);

CREATE TABLE Tb_evaluacion (
    id_evaluacion SERIAL PRIMARY KEY,
    descripcion VARCHAR(500) NOT NULL,
    fecha DATE,
    id_curso INT,
    id_competencia INT,
    FOREIGN KEY (id_curso) REFERENCES Tb_curso(id_curso),
    FOREIGN KEY (id_competencia) REFERENCES Tb_competencia(id_competencia)
);

CREATE TABLE Tb_preguntas (
    id_pregunta SERIAL PRIMARY KEY,
    pregunta TEXT NOT NULL,
    id_evaluacion INT,
    FOREIGN KEY (id_evaluacion) REFERENCES Tb_evaluacion(id_evaluacion)
);

CREATE TABLE Tb_opciones_respuesta (
    id_opcion SERIAL PRIMARY KEY,
    opcion TEXT NOT NULL,
    es_correcta BOOLEAN,
    id_pregunta INT,
    FOREIGN KEY (id_pregunta) REFERENCES Tb_preguntas(id_pregunta)
);

CREATE TABLE Tb_evaluacion_pregunta (
    id_evaluacion INT,
    id_pregunta INT,
    PRIMARY KEY (id_evaluacion, id_pregunta),
    FOREIGN KEY (id_evaluacion) REFERENCES Tb_evaluacion(id_evaluacion),
    FOREIGN KEY (id_pregunta) REFERENCES Tb_preguntas(id_pregunta)
);

CREATE TABLE Tb_calificacion (
    id_calificacion SERIAL PRIMARY KEY,
    nota NUMERIC(5,2),
    id_profesor INT,
    id_competencia INT,
    id_estudiante INT,
    id_evaluacion INT,
    FOREIGN KEY (id_profesor) REFERENCES Tb_profesor(id_profesor),
    FOREIGN KEY (id_competencia) REFERENCES Tb_competencia(id_competencia),
    FOREIGN KEY (id_estudiante) REFERENCES Tb_estudiante(id_estudiante),
    FOREIGN KEY (id_evaluacion) REFERENCES Tb_evaluacion(id_evaluacion)
);

CREATE TABLE Tb_notificaciones (
    id_notificacion SERIAL PRIMARY KEY,
    fecha_envio DATE NOT NULL,
    mensaje TEXT NOT NULL,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Tb_usuario(id_usuario)
);

CREATE TABLE Tb_log_actividades (
    id_log SERIAL PRIMARY KEY,
    actividad VARCHAR(255) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Tb_usuario(id_usuario)
);