import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaDTO } from 'src/app/models/categoria.dto';
import { CategoriaService } from 'src/app/services/categorias/categoria.service';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  
categoriaService = new CategoriaService(this.http);

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<any>{
    try{
      return this.categoriaService.listarCategorias();
    } catch(error){
      console.log(error);
      throw error;
    }
  }
}
