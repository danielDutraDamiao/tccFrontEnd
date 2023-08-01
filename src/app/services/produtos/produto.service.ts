import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoDTO } from 'src/app/models/produto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseURL = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(this.baseURL);
  }

  obterProduto(id: number): Observable<ProdutoDTO> {
    return this.http.get<ProdutoDTO>(`${this.baseURL}/${id}`);
  }

  criarProduto(produto: ProdutoDTO): Observable<ProdutoDTO> {
    return this.http.post<ProdutoDTO>(this.baseURL, produto);
  }

  atualizarProduto(id: number, produto: ProdutoDTO): Observable<ProdutoDTO> {
    return this.http.put<ProdutoDTO>(`${this.baseURL}/${id}`, produto);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
