import { IPedido } from "../interfaces/pedido.interface";

export class Pedido implements IPedido {
    constructor(
        public nombre: string,
        public descripcion: string,
        public numero: number,
        public estado: 'ingresado' | 'cocinando' | 'terminado' | 'entregado'
      ) {}
}

