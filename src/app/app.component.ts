import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Verificar para multiples ramas',
    'Borrar al hacer merge del PR',
    'Testear produccion final',
    'Limitar funcionalidad de previe a pr de development'
  ];
}
