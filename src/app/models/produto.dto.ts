import { CategoriaDTO } from "./categoria.dto";

export class ProdutoDTO {
    
    idProduto!: String;
    nomeProduto!: String;
    idCategoria!: String;
    precoProduto!: Number;
    imagemProduto!: String;
    categoriaPRoduto: CategoriaDTO = new CategoriaDTO();

}   