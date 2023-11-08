import { CidadeDTO } from "./cidade.dto";

export class OngDTO {
    idOng!: number;
    nomeOng!: string;
    enderecoOng!: string;
    cnpjOng!: string;
    cidade!: CidadeDTO;
}