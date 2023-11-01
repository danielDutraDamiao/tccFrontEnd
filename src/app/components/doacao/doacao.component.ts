import { Component, OnInit } from '@angular/core';
import { EstadoDTO } from 'src/app/models/estado.dto';
import { DoacaoService } from './doacao.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css'],
})
export class DoacaoComponent implements OnInit {
  
  estados: EstadoDTO[] = []; // Declarando um array de EstadoDTO
  estadoSelecionado: EstadoDTO | null = null;
  options: string[];
  constructor(private doacaoService: DoacaoService) {
    this.options = [];
  }

//   ngOnInit() {
//     this.doacaoService.listarEstados().subscribe(
//       (resposta: EstadoDTO[]) => {
//         this.estados = resposta;
//         this.options = this.estados.map(estado => estado.nomeEstado);
//       },
//       (error) => {
//         console.error(error);
//       }
//       );
    
// }

ngOnInit() {
  this.doacaoService.listarEstados().subscribe(estados => {
    // Transforma a estrutura de estados para a forma esperada pelo p-cascadeSelect
    this.options = estados.map(estado => ({
      name: estado.nomeEstado, // Este é o label do grupo de opções
      code: estado.idEstado,
      // 'states' é uma propriedade esperada pelo p-cascadeSelect, mas neste caso, será apenas um grupo sem subgrupos
      states: [{
        name: estado.nomeEstado, // Nome do 'subgrupo', mesmo que não tenhamos um neste caso
        cities: estado.cidades.length > 0 ? estado.cidades.map(cidade => ({
          cname: cidade.nomeCidade, // O label da cidade, que será mostrado no select
          code: cidade.idCidade
        })) : [{ cname: 'Nenhuma cidade disponível', code: '0' }] // Placeholder se não houver cidades
      }]
    }));
  });
}
}
