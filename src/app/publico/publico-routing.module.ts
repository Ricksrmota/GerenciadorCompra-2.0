import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PublicoComponent} from "./publico/publico.component";
import { PaginaInicialComponent } from '../pagina-inicial/pagina-inicial.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

const routes: Routes = [
  {
    path: '', component: PublicoComponent, children: [
      {path: '', component: PaginaInicialComponent},
      {path: 'login', component: LoginComponent},
      {path: 'carrinho', component: CarrinhoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule {
}
