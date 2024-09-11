import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosEmpleadoComponent } from './pages/productos-empleado/productos-empleado.component';
import { rolesGuard } from './guards/roles.guard';
import { RegistersService } from './services/registers/registers.service';
import { inject } from '@angular/core';
import { UsersComponent } from './pages/users/users.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

function isRole(role?: String){
  const registerService = inject(RegistersService);
  console.log(registerService.currentRegister?.role);
  return registerService.currentRegister?.role === role;
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'pagos', component: PagosComponent },
  { 
    path: 'productos', 
    component: ProductosComponent,
    //canMatch: [rolesGuard]
    //...canActivate(() => redirectUnauthorizedTo(['login'])),
    canMatch: [() => isRole("Admin")],
  },
  { 
    path: 'productos', 
    component: ProductosEmpleadoComponent,
    //canMatch: [rolesGuard]
    canMatch: [() => isRole("Empleado")]
  },
  { 
    path: 'productos', 
    component: LoginComponent,
    //canMatch: [rolesGuard]
    canMatch: [() => isRole()]
  }  

];
