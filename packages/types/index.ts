export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'customer';
}