import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEmpleadoComponent } from './productos-empleado.component';

describe('ProductosEmpleadoComponent', () => {
  let component: ProductosEmpleadoComponent;
  let fixture: ComponentFixture<ProductosEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
