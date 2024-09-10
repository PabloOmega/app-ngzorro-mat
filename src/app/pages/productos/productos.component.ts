import { Component } from '@angular/core';
import { Producto, ProductosService } from '../../services/productos/productos.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzIconModule,
    NzTableModule,
    CommonModule
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  form: FormGroup;
  productos: Producto[] = [];

  constructor(private productosService: ProductosService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productosService.getProductos()
      .subscribe((response) => {
        this.productos = response;
      })
  }

  onClickSubmit(): void {
    if(this.form.invalid) return;
    this.productosService.createProducto(this.form.value)
      .subscribe((response) => {
        this.productos.push(response);
      })
  }

  onClickUpdate(id: string): void {
    this.productosService.updateProductos({id, ...this.form.value})
      .subscribe((response) => {
        const index = this.productos.findIndex(p => p.id === response.id);
        this.productos[index] = response;
      });
  }

  onClickDelete(id: string): void {
    this.productosService.deleteProductos(id)
      .subscribe(() => {
        const index = this.productos.findIndex(p => p.id === id);
        this.productos.splice(index, 1);
      });
  }
}
