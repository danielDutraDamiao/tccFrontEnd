import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OngDTO } from 'src/app/models/ong.dto';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  private baseURL = 'http://localhost:8080/api/ongs';

  constructor(private http: HttpClient) { }

  listarOngs(): Observable<OngDTO[]> {
    return this.http.get<OngDTO[]>(this.baseURL);
  }
  
  obterOng(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
  criarOng(ong: any): Observable<any> {
    return this.http.post(this.baseURL, ong);
  }
  
  atualizarOng(id: number, ong: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, ong);
  }
  
  deletarOng(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }


}