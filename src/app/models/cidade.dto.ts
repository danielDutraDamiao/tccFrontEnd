import { EstadoDTO } from "./estado.dto";


export class CidadeDTO {
    
    idCidade!: number;
    nomeCidade!: string;
    idEstado!: EstadoDTO;  
}   