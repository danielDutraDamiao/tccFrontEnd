import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoacaoRoutingModule } from './doacao-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect'; // Verifique o caminho correto
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TableModule } from 'primeng/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DoacaoRoutingModule,
    CarouselModule,
    CardModule,
    MultiSelectModule, 
    CascadeSelectModule,
    TableModule
  ]
})
export class DoacaoModule { }
