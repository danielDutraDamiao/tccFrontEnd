import { Component, OnInit } from '@angular/core';
  
import { MegaMenuItem, MenuItem, TreeNode } from 'primeng/api';
import { CategoriaDTO } from 'src/app/models/categoria.dto';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { SubCategoriaDTO } from 'src/app/models/subcategoria.dto';
import { CategoriaService } from 'src/app/services/categorias/categoria.service';
import { ProdutoService } from 'src/app/services/produtos/produto.service';
import { SubCategoriaService } from 'src/app/services/subcategorias/subcategorias.service';



@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit{

  categorias: CategoriaDTO[] = [];
  produtos: ProdutoDTO[] = [];
  items!: MegaMenuItem[];
  subCategorias: SubCategoriaDTO[] = [];

  constructor(private categoriaService: CategoriaService,  private produtoService: ProdutoService, private subCategoriaService: SubCategoriaService )
   { this.items = [];}
 


  ngOnInit() {
   
    this.categoriaService.listarCategorias().subscribe(
      (resposta: CategoriaDTO[]) => {
        this.categorias = resposta;
        console.log('Categorias listadas com sucesso!', resposta);
      },
      (error) => {
        console.error(error);
      }
    );

    this.produtoService.listarProdutos().subscribe(
      (resposta: ProdutoDTO[]) => {
        this.produtos = resposta;
        console.log('Produtos listados com sucesso!', resposta);
      },
      (error) => {
        console.error(error);
      }
    );

    
    this.subCategoriaService.listarSubCategorias().subscribe(
      (resposta: SubCategoriaDTO[]) => {
        this.subCategorias = resposta;
        console.log('Subcategorias listadas com sucesso!', resposta);
      },
      (error) => {
        console.error(error);
      }
    );

    this.items = this.montaMenu(this.categorias);

   
}

montaMenu(categorias: CategoriaDTO[]): MegaMenuItem[] {
  const megaMenuItems: MegaMenuItem[] = [];
  for(const categoria of categorias) {
    const megaMenuItem: MegaMenuItem = {label: categoria.nomeCategoria, items: [[]]}

    for(const subCategoria of this.subCategorias) {
      const menuItem: MenuItem = {label: subCategoria.nomeSubCategoria, items: []}
      megaMenuItem.items![0].push(menuItem);

      for(const produto of this.produtos) {
        const menuItemProduto: MenuItem = {label: produto.nomeProduto, items: []}
        menuItem.items!.push(menuItemProduto)
      }
    }

    megaMenuItems.push(megaMenuItem);
  }

  return megaMenuItems;
}

}



