import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private baseURL = 'http://localhost:8080/api/cidades';

  constructor(private http: HttpClient) { }

  listarCidades(): Observable<any> {
    return this.http.get(this.baseURL);
  }
  
  obterCidade(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
  criarCidade(cidade: any): Observable<any> {
    return this.http.post(this.baseURL, cidade);
  }
  
  atualizarCidade(id: number, cidade: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, cidade);
  }
  
  deletarCidade(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
