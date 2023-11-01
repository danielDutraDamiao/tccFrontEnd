import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MegaMenuItem, MenuItem } from 'primeng/api';

import { CategoriaDTO } from 'src/app/models/categoria.dto';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { SubCategoriaDTO } from 'src/app/models/subcategoria.dto';

import { CategoriaService } from 'src/app/services/categorias/categoria.service';
import { ProdutoService } from 'src/app/services/produtos/produto.service';
import { SubCategoriaService } from 'src/app/services/subcategorias/subcategorias.service';
import { ProductService } from './product.service';
import { Product } from 'src/app/models/product';
import { DataViewLayoutOptions } from 'primeng/dataview';

import { DomSanitizer } from '@angular/platform-browser';


type DataViewLayout = 'list' | 'grid';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  categorias: CategoriaDTO[] = [];
  produtos: ProdutoDTO[] = [];
  items!: MegaMenuItem[];
  subCategorias: SubCategoriaDTO[] = [];
  layout: DataViewLayout = 'grid';
  

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private subCategoriaService: SubCategoriaService,
    private productService: ProductService,
    private dataViewLayoutOptions: DataViewLayoutOptions
  ) { this.items = []; }

  ngOnInit() {
    forkJoin({
      categorias: this.categoriaService.listarCategorias(),
      subCategorias: this.subCategoriaService.listarSubCategorias(),
      produtos: this.produtoService.listarProdutos()
    }).subscribe(result => {
      this.categorias = result.categorias;
      this.subCategorias = result.subCategorias;
      this.produtos = result.produtos;
      this.items = this.buildMenu(this.produtos);
    });
    this.produtos.forEach(produto => {
      this.loadRandomImageForProduct(produto);
    });
  }

  onLayoutChange(layout: DataViewLayout) {
    this.layout = layout; // Update the dataViewLayout property
  }

  loadRandomImageForProduct(produto: ProdutoDTO): void {
    const accessKey = 'YOUR_ACCESS_KEY'; // Substitua pela sua chave de acesso da API do Unsplash
    const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${encodeURIComponent(produto.nomeProduto)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.urls && data.urls.small) {
          // Atualizar o produto com a URL da imagem
          produto.imagemProduto = data.urls.small;
        }
      })
      .catch(error => {
        console.error('Erro ao carregar imagem do Unsplash:', error);
        // Aqui você pode definir uma imagem padrão em caso de erro
        produto.imagemProduto = 'path/to/default/image.png';
      });
  }

//   testeProdutos() {
//     this.produtoService.listarProdutos().subscribe(produtos => {
//         produtos.forEach(produto => {
//             if (!produto.subcategoria) {
//             } else {
//             }
            
//             console.log("ID da subcategoria atual:", this.subCategorias[0].idSubCategoria);
//         });
//     });
// }



  buildMenu(produtos: ProdutoDTO[]): MegaMenuItem[] {
    const menuItems: MegaMenuItem[] = [];

    this.categorias.forEach(categoria => {
      console.log('Processando categoria:', categoria.nomeCategoria);
      const categoriaMenuItem: MegaMenuItem = {
        label: categoria.nomeCategoria,
        items: [[]]
      };

      const subCategoriasRelevantes = this.subCategorias.filter(subCategoria =>
        subCategoria.categoria.idCategoria === categoria.idCategoria
      );


      subCategoriasRelevantes.forEach(subCategoria => {
        console.log('Processando subcategoria:', subCategoria.nomeSubCategoria);
        const subCategoriaItems: MenuItem[] = [];

        console.log('Todos os produtos:', produtos);

        const produtosRelevantes = produtos.filter(produto => {
          console.log('Verificando produto:', produto.nomeProduto)
          const produtoSubCatId = produto.subcategoria?.idSubCategoria;
          const currentSubCatId = subCategoria?.idSubCategoria;

          console.log('Verificando produto:', produto.nomeProduto);
          console.log('ID da subcategoria do produto:', produtoSubCatId);
          console.log('ID da subcategoria atual:', currentSubCatId);

          if (produto.subcategoria && produto.subcategoria.idSubCategoria) {
            return produto.subcategoria.idSubCategoria == subCategoria.idSubCategoria;
          }
          return false;
        });

        produtosRelevantes.forEach(produto => {
          subCategoriaItems.push({
            label: produto.nomeProduto,
          });
        });

        categoriaMenuItem.items![0].push({
          label: subCategoria.nomeSubCategoria,
          items: subCategoriaItems
        });
      });

      menuItems.push(categoriaMenuItem);
    });

    console.log('Menu:', menuItems)
    return menuItems;
  }

  getSeverity(product: Product): string | undefined {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return undefined;
    }
}
}
