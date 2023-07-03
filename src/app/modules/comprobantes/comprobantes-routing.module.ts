import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturasComponent } from './facturas/facturas.component';
import { NotasCreditoComponent } from './notas-credito/notas-credito.component';
import { GuiasRemisionComponent } from './guias-remision/guias-remision.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'facturas',
    pathMatch: 'full',
  },
  {
    path: 'facturas',
    component: FacturasComponent,
  },
  {
    path: 'notas-credito',
    component: NotasCreditoComponent,
  },
  {
    path: 'guias-remision',
    component: GuiasRemisionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprobantesRoutingModule {}
