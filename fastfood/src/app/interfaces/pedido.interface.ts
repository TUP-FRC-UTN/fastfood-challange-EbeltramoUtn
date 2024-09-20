export interface IPedido {
    nombre: string;
    descripcion: string;
    numero: number;
    estado: 'ingresado' | 'cocinando' | 'terminado' | 'entregado';
  }
  