import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseURL = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<any> {
    return this.http.get(this.baseURL);
  }
  
  obterCategoria(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
  criarCategoria(categoria: any): Observable<any> {
    return this.http.post(this.baseURL, categoria);
  }
  
  atualizarCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, categoria);
  }
  
  deletarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
