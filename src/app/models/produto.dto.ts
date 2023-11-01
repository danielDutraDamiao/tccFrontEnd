import { SubCategoriaDTO } from "./subcategoria.dto";
import { CategoriaDTO } from "./categoria.dto";

export class ProdutoDTO {
    
    idProduto!: number;
    nomeProduto!: string;
    idCategoria!: string;
    precoProduto!: Number;
    categoriaProduto: CategoriaDTO = new CategoriaDTO();
    imagemProduto!: string;
    subcategoria!: SubCategoriaDTO;
    quantidade!: Number;
    statusInventario!: string;
    avaliacao!: Number;

}   