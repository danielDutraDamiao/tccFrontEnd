import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseURL = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {
    return this.http.get(this.baseURL);
  }
  
  obterProduto(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
  criarProduto(produto: any): Observable<any> {
    return this.http.post(this.baseURL, produto);
  }
  
  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, produto);
  }
  
  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
