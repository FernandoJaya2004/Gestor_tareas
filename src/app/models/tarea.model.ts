export interface Tarea {
    id: number;
    nombre: string;
    estado: 'pendiente' | 'en progreso' | 'finalizada';
   }