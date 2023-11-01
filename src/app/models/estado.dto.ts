import { CidadeDTO } from "./cidade.dto";

export class EstadoDTO {
    idEstado!: number;
    nomeEstado!: string;
    cidades!: CidadeDTO[];
}