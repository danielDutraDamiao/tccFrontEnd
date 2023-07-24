import { CategoriaDTO } from "./categoria.dto";

export class ProdutoDTO {
    
    idProduto!: string;
    nomeProduto!: string;
    idCategoria!: string;
    precoProduto!: Number;
    imagemProduto!: string;
    categoriaPRoduto: CategoriaDTO = new CategoriaDTO();

}   