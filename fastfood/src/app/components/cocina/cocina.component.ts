import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../classes/pedido';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent implements OnInit{
  pedidosIngresados: Pedido[] = [];
  pedidoEnCoccion: Pedido | null = null;
  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.pedidosIngresados$.subscribe((pedidos) => {
      this.pedidosIngresados = pedidos;
    });
    this.pedidoService.pedidosCocinando$.subscribe((pedido) => {
      this.pedidoEnCoccion = pedido;
    });
  }

  cocinar(pedido: Pedido) {
    this.pedidoService.cocinarPedido(pedido);
  }

  pedidoTerminado() {
    this.pedidoService.terminarPedido();
  }

}
