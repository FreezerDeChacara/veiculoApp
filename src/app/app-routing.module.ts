import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculoComponent } from "app/veiculo/veiculo.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'veiculo',
    component: VeiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
