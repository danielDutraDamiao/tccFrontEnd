import { Component, OnInit } from '@angular/core';
import { EstadoDTO } from 'src/app/models/estado.dto';
import { DoacaoService } from './doacao.service';
import { CascadeSelectOption } from 'src/app/interfaces/CascadeSelectOption';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css'],
})
export class DoacaoComponent implements OnInit {

  estados: EstadoDTO[] = []; // Declarando um array de EstadoDTO
  estadoSelecionado: any;
  options: any[];
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
    this.buscarEstados();
  }

  public buscarEstados() {
    this.doacaoService.listarEstados().subscribe(estados => {
      this.options = estados.map(estado => {
        return {
          name: estado.nomeEstado,
          value: estado.idEstado,
          items: estado.cidades.map(cidade => {
            return {
              label: cidade.nomeCidade,
              value: cidade.idCidade
            };
          })
        };
      });
      console.log(this.options);
    });
  }


}

