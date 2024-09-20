import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../classes/pedido';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html', 
  styleUrl: './pos.component.css'
})
export class PosComponent {
  nombre = '';
  descripcion = '';

  constructor(private pedidoService: PedidoService) {}

  ordenar() {
    const nuevoPedido = new Pedido(this.nombre, this.descripcion, Math.floor(Math.random() * 1000), 'ingresado');
    this.pedidoService.agregarPedido(nuevoPedido);
    this.nombre = '';
    this.descripcion = '';
  }
}
