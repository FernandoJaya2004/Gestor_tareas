import { Component } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-formulario',
  standalone: false,
  templateUrl: './tarea-formulario.component.html'
})
export class TareaFormularioComponent {
  nombre = '';

  constructor(private tareaService: TareaService) {}

  agregarTarea() {
    if (!this.nombre.trim()) return;

    const nuevaTarea: Tarea = {
      id: Date.now(),
      nombre: this.nombre,
      estado: 'pendiente'
    };

    this.tareaService.agregarTarea(nuevaTarea);
    this.nombre = '';
  }
}
