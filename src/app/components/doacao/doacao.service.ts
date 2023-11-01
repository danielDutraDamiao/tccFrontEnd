import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { EstadoDTO } from 'src/app/models/estado.dto';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {
  
estadoService = new EstadoService(this.http);

  constructor(private http: HttpClient) { }

  listarEstados(): Observable<EstadoDTO[]>{
    try{
      return this.estadoService.listarEstados();
    } catch(error){
      console.log(error);
      throw error;
    }
  }
}
