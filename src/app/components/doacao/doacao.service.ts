import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { EstadoDTO } from 'src/app/models/estado.dto';
import { OngDTO } from 'src/app/models/ong.dto';
import { OngService } from 'src/app/services/ongs/ong.service';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {
  
estadoService = new EstadoService(this.http);
ongService = new OngService(this.http);

  constructor(private http: HttpClient) { }

  listarEstados(): Observable<EstadoDTO[]>{
    try{
      return this.estadoService.listarEstados();
    } catch(error){
      console.log(error);
      throw error;
    }
  }

  listarOngs(): Observable<OngDTO[]> {
    try{
      return this.ongService.listarOngs();
    }catch(error){
      console.log(error);
      throw error;
    }
  }
 
  
}
