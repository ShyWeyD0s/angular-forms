import { Component, signal } from '@angular/core';
import { EjerciciosFormulariosComponent } from './components/ejercicios-formularios-component/ejercicios-formularios-component';

@Component({
  selector: 'app-root',
  imports: [EjerciciosFormulariosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-formularios');
}
