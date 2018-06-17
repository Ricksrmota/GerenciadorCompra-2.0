import {Injectable} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class DisciplinasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/produtos');
  }

  getDisciplina(codigo: number): Observable<any> {
    return this.http.get(this.API_URL + '/produtos/' + codigo );
  }

  addDisciplina(codigo: string, nome: string, preco: string, url: string, categoria: string): Observable<any> {
    const disciplina = {codigo: codigo, nome: nome, preco: preco, url: url, categoria: categoria};
    return this.http.post(this.API_URL + '/produtos', disciplina);
  }

  updateDisciplina(id: number, codigo: string, nome: string, preco: string, url: string, categoria: string): Observable<any> {
    const disciplina = {codigo: codigo, nome: nome, preco: preco, url: url, categoria: categoria};
    return this.http.patch(this.API_URL + '/produtos/' + id, disciplina);
  }

  deleteDisciplina(id: number) {
    return this.http.delete(this.API_URL + '/produtos/' + id);
  }
}
