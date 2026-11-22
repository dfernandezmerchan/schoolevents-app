export interface Evento {
  id: number;
  fechaini: string;
  fechafin: string;
  descripcion: string;
  titulo: string;
  estado: 'BORRADOR' | 'PUBLICADO' | 'FINALIZADO' | 'CANCELADO';
  fechalimite?: string;

  imagen: string;

  lugar: Lugar;
  categoria: Categoria;
  organizador: Usuario;

  cursos: Curso[];
}

export interface Lugar {
  id: number;
  nombre: string;
  aforomaximo: number;
}

export interface Categoria {
  id: number;
  nombre: string;
  color: string;
  icono: string;
}

export interface Curso {
  id: number;
  nombre: string;
  promocion: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2?: string;
  email: string;
  username: string;
  password: string;
  fechanac?: string;
  fechains?: string;
  curso: Curso;
}
