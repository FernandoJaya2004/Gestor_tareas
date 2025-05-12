import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-lista',
  standalone: false,
  templateUrl: './tarea-lista.component.html'
})
export class TareaListaComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.tareaService.tareas$.subscribe(data => {
      this.tareas = data;
    });
  }

  actualizarEstado(id: number, nuevoEstado: string) {
    this.tareaService.actualizarEstado(id, nuevoEstado);
  }

  eliminar(id: number) {
    this.tareaService.eliminarTarea(id);
  }
}