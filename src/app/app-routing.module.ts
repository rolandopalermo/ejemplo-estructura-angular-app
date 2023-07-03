import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: 'comprobantes',
    loadChildren: () => import('./modules/comprobantes/comprobantes.module').then((m) => m.ComprobantesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
