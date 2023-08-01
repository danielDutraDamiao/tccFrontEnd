import { CategoriaDTO } from "./categoria.dto";

export class SubCategoriaDTO {
    idSubCategoria!: number;
    nomeSubCategoria!: string;
    categoria!: CategoriaDTO;  // adicione esta linha
}
