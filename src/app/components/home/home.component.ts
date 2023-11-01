import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: ProdutoDTO[] = [];
  responsiveOptions: any[] = [];

  constructor(private homeService: HomeService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.homeService.listarProdutos().subscribe(
      (resposta: ProdutoDTO[]) => {
        this.produtos = resposta;
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

  converterImagemBase(base64Image: string) {
    if (base64Image.startsWith('data:image')) {
        return this.sanitizer.bypassSecurityTrustUrl(base64Image);
    }
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + base64Image);
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
