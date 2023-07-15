import { SubCategoriaDTO } from "./subcategoria.dto";

export class ProdutoDTO {
    
    idProduto!: String;
    nomeProduto!: String;
    idCategoria!: String;
    precoProduto!: Number;
    imagemProduto!: String;
    subCategoria!: SubCategoriaDTO;
}   