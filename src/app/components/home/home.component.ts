import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.listarProdutos().subscribe(
      (resposta) => {
        console.log('Produtos listados com sucesso!', resposta);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
