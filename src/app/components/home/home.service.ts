import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produtos/produto.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  produtoService = new ProdutoService(this.http);

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {
    try {
      return this.produtoService.listarProdutos();
    } catch (error) {
      console.log(error);
      throw error; // Lança a exceção novamente para ser tratada no componente
    }
  }
}
