import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ProdutoDTO } from 'src/app/models/produto.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: ProdutoDTO[] = [];
  responsiveOptions: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.listarProdutos().subscribe(
      (resposta: ProdutoDTO[]) => {
        this.produtos = resposta;
        console.log('Produtos listados com sucesso!', resposta);
      },
      (error) => {
        console.error(error);
      }
    );

    this.responsiveOptions = [
      {breakpoint: '1199px',numVisible: 1,numScroll: 1},
      {breakpoint: '991px',umVisible: 2,numScroll: 1},
      {breakpoint: '767px',numVisible: 1,numScroll: 1}
    ];
  }

  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return '';
    }
  }
}
