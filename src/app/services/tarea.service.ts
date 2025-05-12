import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);

  tareas$ = this.tareasSubject.asObservable();

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const datos = localStorage.getItem('tareas');
      if (datos) {
        this.tareas = JSON.parse(datos);
        this.tareasSubject.next(this.tareas);
      }
    }
  }

  private guardarLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
  }

  agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
    this.guardarLocalStorage();
    this.tareasSubject.next(this.tareas);
  }

  obtenerTareas(): Tarea[] {
    return [...this.tareas];
  }

  actualizarEstado(id: number, estado: string): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.estado = estado as any;
      this.guardarLocalStorage();
      this.tareasSubject.next(this.tareas);
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardarLocalStorage();
    this.tareasSubject.next(this.tareas);
  }
}