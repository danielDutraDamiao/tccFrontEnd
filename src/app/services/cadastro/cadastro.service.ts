import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private baseURL = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient) { }

  listarUsers(): Observable<any> {
    return this.http.get(this.baseURL + "listar");
  }
  
  criarUsers(users: any): Observable<any> {
    return this.http.post(this.baseURL + "create", users);
  }
  
  atualizarUsers(id: number, users: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, users);
  }
  
  deletarUsers(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
