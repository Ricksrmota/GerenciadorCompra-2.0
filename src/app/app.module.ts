import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {PublicoModule} from './publico/publico.module';
import {AdminModule} from './admin/admin.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AdminModule,
    PublicoModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    PaginaInicialComponent,
    CarrinhoComponent,
    ListaProdutosComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
