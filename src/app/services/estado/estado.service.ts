import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadoDTO } from 'src/app/models/estado.dto';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private baseURL = 'http://localhost:8080/api/estados';

  constructor(private http: HttpClient) { }

  listarEstados(): Observable<EstadoDTO[]> {
    return this.http.get<EstadoDTO[]>(this.baseURL);
  }
  
  obterEstado(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
  criarEstado(estado: any): Observable<any> {
    return this.http.post(this.baseURL, estado);
  }
  
  atualizarEstado(id: number, estado: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, estado);
  }
  
  deletarEstado(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
