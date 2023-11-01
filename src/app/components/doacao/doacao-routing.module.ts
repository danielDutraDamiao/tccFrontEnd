import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoComponent } from './doacao.component'

const routes: Routes = [{ path: 'doacao', component: DoacaoComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DoacaoRoutingModule { }