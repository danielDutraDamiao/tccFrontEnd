import { SubCategoriaDTO } from "./subcategoria.dto";

export class ProdutoDTO {
    
    idProduto!: string;
    nomeProduto!: string;
    idCategoria!: string;
    precoProduto!: Number;
    categoriaPRoduto: CategoriaDTO = new CategoriaDTO();
    imagemProduto!: string;
    subCategoria!: SubCategoriaDTO;
}   