import { Evento } from '../modelos/evento';

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: 'Torneo de fútbol sala',
    descripcion: 'Torneo de fútbol sala entre los diferentes cursos del centro.',
    fechaini: '2026-11-25T10:00:00',
    fechafin: '2026-11-25T14:00:00',
    estado: 'PUBLICADO',
    fechalimite: '2026-11-24T23:59:59',

    lugar: {
      id: 1,
      nombre: 'Pabellón deportivo',
      aforomaximo: 100
    },

    categoria: {
      id: 1,
      nombre: 'Deportes',
      color: '#7254e8',
      icono: 'football-outline'
    },

    organizador: {
      id: 1,
      nombre: 'Daniel',
      apellido1: 'Fernández',
      apellido2: 'Merchán',
      email: 'daniel@example.com',
      username: 'daniel',
      password: '',
      fechanac: '2005-05-15',
      fechains: '2026-09-15T09:00:00',
      curso: {
        id: 1,
        nombre: '2º DAM',
        promocion: '2025-2027'
      }
    },

    cursos: [
      {
        id: 1,
        nombre: '2º DAM',
        promocion: '2025-2027'
      },
      {
        id: 2,
        nombre: '1º DAM',
        promocion: '2026-2028'
      }
    ]
  },

  {
    id: 2,
    titulo: 'Charla sobre desarrollo web',
    descripcion: 'Charla sobre las nuevas tecnologías utilizadas en el desarrollo de aplicaciones web.',
    fechaini: '2026-12-02T12:00:00',
    fechafin: '2026-12-02T14:00:00',
    estado: 'PUBLICADO',
    fechalimite: '2026-12-01T23:59:59',

    lugar: {
      id: 2,
      nombre: 'Salón de actos',
      aforomaximo: 200
    },

    categoria: {
      id: 2,
      nombre: 'Tecnología',
      color: '#20c9a6',
      icono: 'laptop-outline'
    },

    organizador: {
      id: 2,
      nombre: 'Lucía',
      apellido1: 'García',
      apellido2: 'López',
      email: 'lucia@example.com',
      username: 'lucia',
      password: '',
      fechanac: '2005-08-20',
      fechains: '2026-09-15T09:00:00',
      curso: {
        id: 1,
        nombre: '2º DAM',
        promocion: '2025-2027'
      }
    },

    cursos: [
      {
        id: 1,
        nombre: '2º DAM',
        promocion: '2025-2027'
      }
    ]
  },

  {
    id: 3,
    titulo: 'Fiesta de Navidad',
    descripcion: 'Celebración de Navidad con actividades, música y juegos para los alumnos.',
    fechaini: '2026-12-18T17:00:00',
    fechafin: '2026-12-18T21:00:00',
    estado: 'PUBLICADO',
    fechalimite: '2026-12-17T23:59:59',

    lugar: {
      id: 3,
      nombre: 'Patio principal',
      aforomaximo: 300
    },

    categoria: {
      id: 3,
      nombre: 'Ocio',
      color: '#ff6685',
      icono: 'musical-notes-outline'
    },

    organizador: {
      id: 3,
      nombre: 'Carlos',
      apellido1: 'Martínez',
      apellido2: 'Pérez',
      email: 'carlos@example.com',
      username: 'carlos',
      password: '',
      fechanac: '2004-03-10',
      fechains: '2026-09-15T09:00:00',
      curso: {
        id: 2,
        nombre: '1º DAM',
        promocion: '2026-2028'
      }
    },

    cursos: [
      {
        id: 1,
        nombre: '2º DAM',
        promocion: '2025-2027'
      },
      {
        id: 2,
        nombre: '1º DAM',
        promocion: '2026-2028'
      }
    ]
  }
];
