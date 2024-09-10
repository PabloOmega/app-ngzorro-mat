import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { RegistersService } from '../services/registers/registers.service';

export const rolesGuard: CanMatchFn = (route, segments) => {
  
  const registerService = inject(RegistersService);
  const router = inject(Router);
  const role = registerService.currentRegister?.role;
  const nombreComponent = route.component?.name;

  console.log(role, nombreComponent);

  if(role === 'Admin') return true;
  if(role === 'Empleado' && nombreComponent === '_ProductosEmpleadoComponent') return true;
  if(!role) router.navigateByUrl('/login');
  return false;
};
