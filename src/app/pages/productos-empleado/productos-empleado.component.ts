import { Component } from '@angular/core';
import { Producto, ProductosService } from '../../services/productos/productos.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-empleado',
  standalone: true,
  imports: [
    NzTableModule,
    CommonModule
  ],
  templateUrl: './productos-empleado.component.html',
  styleUrl: './productos-empleado.component.css'
})
export class ProductosEmpleadoComponent {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productosService.getProductos()
      .subscribe((response) => {
        this.productos = response;
      })
  }
}
