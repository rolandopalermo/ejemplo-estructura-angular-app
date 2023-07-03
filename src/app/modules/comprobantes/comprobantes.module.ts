import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprobantesRoutingModule } from './comprobantes-routing.module';
import { FacturasComponent } from './facturas/facturas.component';
import { NotasCreditoComponent } from './notas-credito/notas-credito.component';
import { GuiasRemisionComponent } from './guias-remision/guias-remision.component';

@NgModule({
  declarations: [FacturasComponent, NotasCreditoComponent, GuiasRemisionComponent],
  imports: [
    CommonModule,
    ComprobantesRoutingModule
  ]
})
export class ComprobantesModule { }
