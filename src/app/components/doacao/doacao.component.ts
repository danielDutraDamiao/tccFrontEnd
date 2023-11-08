import { Component, OnInit } from '@angular/core';
import { EstadoDTO } from 'src/app/models/estado.dto';
import { DoacaoService } from './doacao.service';
import { CascadeSelectOption } from 'src/app/interfaces/CascadeSelectOption';
import { OngDTO } from 'src/app/models/ong.dto';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css'],
})
export class DoacaoComponent implements OnInit {

  estados: EstadoDTO[] = []; // Declarando um array de EstadoDTO
  cidadeSelecionada: any;
  options: any[];
  ongs: OngDTO[] = []; // Lista original de ONGs
  ongsWithFilter: OngDTO[] = []; // Lista filtrada de ONGs para exibição na tabela  

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
    this.buscarOngs();
  }

  public buscarOngs(){
    this.doacaoService.listarOngs().subscribe(
      (resposta: OngDTO[]) => {
        this.ongs = resposta;
        this.filtrarOngs();
      },
      (error) => {
        console.error(error);
      }
    );
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

  public filtrarOngs() {
    console.log(this.cidadeSelecionada, "estado selecionado (tipo):", typeof this.cidadeSelecionada);
    
  
    if (this.cidadeSelecionada || this.cidadeSelecionada === 0) { // Inclui a verificação para o valor 0
      this.ongsWithFilter = this.ongs.filter(ong => {
        console.log(this.ongs, "ongs dentro do filter");

        // Apenas tenta acessar idCidade se ong.cidade estiver definido
        if (ong.cidade) {
          console.log(this.ongs, "ongs dentro do if ong.cidades");
          console.log(`Comparando: ${ong.cidade.idCidade} com ${this.cidadeSelecionada}`);
          return ong.cidade.idCidade === this.cidadeSelecionada;
        }
        return false; // Se ong.cidade for undefined, retorna false para o filter
      });
  
      console.log(this.ongsWithFilter, "ongs filtradas fora do if");
    } else {
      this.ongsWithFilter = this.ongs;
      console.log(this.ongsWithFilter, "ongs filtradas else");
    }
  }
  
  
  
  
  

}

