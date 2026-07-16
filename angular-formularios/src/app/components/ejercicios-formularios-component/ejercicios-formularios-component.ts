import { Component, Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

// ==========================================
// EJERCICIO 7: Directiva de Mayúsculas 
// ==========================================
@Directive({
  selector: '[appMayusculas]',
  standalone: true
})
export class MayusculasDirective {
  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}

// ==========================================
// EJERCICIO 9: Componente Hijo (Chat)
// ==========================================
@Component({
  selector: 'app-chat-hijo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="border p-3 mt-3">
      <h3>Child Component</h3>
      <div class="form-group">
        <label>Enter a Message:</label>
        <input type="text" class="form-control" [(ngModel)]="mensajeHijo">
      </div>
      <button class="btn btn-secondary mt-2" (click)="enviarAlPadre()">Send Message To Parent</button>
      <p class="mt-3">Message from parent: <strong>{{ mensajeDesdePadre }}</strong></p>
    </div>
  `
})
export class ChatHijoComponent {
  @Input() mensajeDesdePadre: string = '';
  @Output() mensajeEmitido = new EventEmitter<string>();

  mensajeHijo: string = '';

  enviarAlPadre() {
    this.mensajeEmitido.emit(this.mensajeHijo);
  }
}

// ==========================================
// COMPONENTE PRINCIPAL: Ejercicios Formularios
// ==========================================
@Component({
  selector: 'app-ejercicios-formularios-component', // <-- Selector actualizado
  standalone: true,
  imports: [CommonModule, FormsModule, MayusculasDirective, ChatHijoComponent],
  templateUrl: './ejercicios-formularios-component.html', // <-- Asegúrate de que el HTML tenga este nombre
  styleUrls: ['./ejercicios-formularios-component.css']
})
export class EjerciciosFormulariosComponent { // <-- Nombre de la clase actualizado

  // Ejercicio 1 & 5
  reg = { nombre: '', correo: '', password: '', confirm: '' };

  // Ejercicio 2
  contacto = { nombre: '', correo: '', mensaje: '' };
  exitoContacto = false;

  enviarContacto(form: NgForm) {
    if (form.valid) {
      this.exitoContacto = true;
      setTimeout(() => this.exitoContacto = false, 3000);
      form.reset();
    }
  }

  // Ejercicio 3
  terminos = { nombre: '', aceptado: false };

  // Ejercicio 4
  telefonos = { nombre: '', lista: [''] };

  agregarTelefono() {
    this.telefonos.lista.push('');
  }

  quitarTelefono(index: number) {
    if (this.telefonos.lista.length > 1) {
      this.telefonos.lista.splice(index, 1);
    }
  }

  // Función auxiliar para forzar la detección del cambio de index
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  // Ejercicio 6
  datosGeograficos = [
    {
      pais: 'Colombia',
      departamentos: [
        { nombre: 'Cauca', ciudades: ['Popayán', 'Santander de Quilichao'] },
        { nombre: 'Valle', ciudades: ['Cali', 'Palmira'] }
      ]
    },
    {
      pais: 'España',
      departamentos: [
        { nombre: 'Madrid', ciudades: ['Madrid', 'Alcalá'] },
        { nombre: 'Cataluña', ciudades: ['Barcelona', 'Girona'] }
      ]
    }
  ];

  paisSeleccionado = '';
  departamentoSeleccionado = '';
  ciudadSeleccionada = '';
  departamentosDisponibles: any[] = [];
  ciudadesDisponibles: string[] = [];

  actualizarDepartamentos() {
    const pais = this.datosGeograficos.find(p => p.pais === this.paisSeleccionado);
    this.departamentosDisponibles = pais ? pais.departamentos : [];
    this.departamentoSeleccionado = '';
    this.ciudadesDisponibles = [];
    this.ciudadSeleccionada = '';
  }

  actualizarCiudades() {
    const depto = this.departamentosDisponibles.find(d => d.nombre === this.departamentoSeleccionado);
    this.ciudadesDisponibles = depto ? depto.ciudades : [];
    this.ciudadSeleccionada = '';
  }

  // Ejercicio 7
  textoMayusculas = '';

  // Ejercicio 8
  encuesta = { satisfaccion: '5', recomendar: 'si', comentarios: '' };

  enviarEncuesta(form: NgForm) {
    console.log('Resultados de la encuesta:', this.encuesta);
    form.reset({ satisfaccion: '5', recomendar: 'si', comentarios: '' });
  }

  // Ejercicio 9
  mensajePadre = '';
  mensajeRecibidoDeHijo = '';
  mensajeEnviadoAHijo = '';

  enviarAHijo() {
    this.mensajeEnviadoAHijo = this.mensajePadre;
  }

  recibirDeHijo(mensaje: string) {
    this.mensajeRecibidoDeHijo = mensaje;
  }
}