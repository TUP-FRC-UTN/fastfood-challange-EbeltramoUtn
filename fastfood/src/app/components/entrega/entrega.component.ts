import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../classes/pedido';
import { PedidoService } from '../../services/pedido.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.css'
})
export class EntregaComponent implements OnInit {
  pedidosTerminados: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.pedidosTerminados$.subscribe((pedidos) => {
      this.pedidosTerminados = pedidos;
    });
  }

  entregar(pedido: Pedido) {
    this.pedidoService.entregarPedido(pedido);
  }

}
