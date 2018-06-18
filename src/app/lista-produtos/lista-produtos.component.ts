import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../admin/disciplinas.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  disciplinas: any[];
  carrinho =[];

  id = null;
  codigo = null;
  nome = null;
  preco = null;
  url = null;
  categoria=null;
  editando=null;
  vendo=false;
 

  constructor(private disciplinasService: DisciplinasService) { }

  ngOnInit() {
    this.atualizarLista();
    
  }
  atualizarLista() {
    this.disciplinasService.getDisciplinas()
      .subscribe(disciplinas => this.disciplinas = disciplinas);
  }

  ver(disciplina) {
    this.vendo=true;
    this.nome = disciplina.nome;
    this.preco = disciplina.preco;
    this.url = disciplina.url;
    this.categoria=disciplina.categoria;
}
cancelar(){
  this.vendo=false;
}
comprar(disciplina)
{
  this.carrinho.push(disciplina);
}

}
