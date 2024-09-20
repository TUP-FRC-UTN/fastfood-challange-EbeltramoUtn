import { Injectable } from '@angular/core';
import { Pedido } from '../classes/pedido';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidosIngresados: Pedido[] = [];
  private pedidosCocinando: Pedido | null = null;
  private pedidosTerminados: Pedido[] = [];

  private pedidosIngresadosSubject = new BehaviorSubject<Pedido[]>([]);
  private pedidosCocinandoSubject = new BehaviorSubject<Pedido | null>(null);
  private pedidosTerminadosSubject = new BehaviorSubject<Pedido[]>([]);

  pedidosIngresados$ = this.pedidosIngresadosSubject.asObservable();
  pedidosCocinando$ = this.pedidosCocinandoSubject.asObservable();
  pedidosTerminados$ = this.pedidosTerminadosSubject.asObservable();

  agregarPedido(pedido: Pedido) {
    this.pedidosIngresados.push(pedido);
    this.pedidosIngresadosSubject.next(this.pedidosIngresados);
  }

  cocinarPedido(pedido: Pedido) {
    this.pedidosCocinando = pedido;
    this.pedidosCocinandoSubject.next(this.pedidosCocinando);
    this.pedidosIngresados = this.pedidosIngresados.filter(p => p.numero !== pedido.numero);
    this.pedidosIngresadosSubject.next(this.pedidosIngresados);
  }

  terminarPedido() {
    if (this.pedidosCocinando) {
      this.pedidosCocinando.estado = 'terminado';
      this.pedidosTerminados.push(this.pedidosCocinando);
      this.pedidosTerminadosSubject.next(this.pedidosTerminados);
      this.pedidosCocinando = null;
      this.pedidosCocinandoSubject.next(null);
    }
  }

  entregarPedido(pedido: Pedido) {
    this.pedidosTerminados = this.pedidosTerminados.filter(p => p.numero !== pedido.numero);
    this.pedidosTerminadosSubject.next(this.pedidosTerminados);
  }
}
