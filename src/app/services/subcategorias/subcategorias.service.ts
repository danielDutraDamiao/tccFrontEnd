import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  private baseURL = 'http://localhost:8080/api/subcategorias';

  constructor(private http: HttpClient) { }

  listarSubCategorias(): Observable<any> {
    return this.http.get(this.baseURL);
  }
  
  obterSubSubCategoria(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
  criarSubSubCategoria(subcategoria: any): Observable<any> {
    return this.http.post(this.baseURL, subcategoria);
  }
  
  atualizarSubCategoria(id: number, subcategoria: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, subcategoria);
  }
  
  deletarSubCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
