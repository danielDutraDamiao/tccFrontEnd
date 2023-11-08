import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown'; // Importe o módulo do PrimeNG
import { VendaRoutingModule } from './venda-routing.module';
import { VendaComponent } from './venda.component';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule
import { MegaMenuModule } from 'primeng/megamenu';
import { DataViewModule } from 'primeng/dataview'; // Importe o módulo DataView do PrimeNG
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { TableModule } from 'primeng/table';






@NgModule({
  declarations: [VendaComponent],
  imports: [
    CommonModule,
    VendaRoutingModule,
    DropdownModule,
    FormsModule,
    MegaMenuModule,
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    TagModule,
    TableModule

    
  ],
  providers: [
    { provide: DataViewLayoutOptions, useValue: {}} // Add this line to provide DataViewLayoutOptions
  ]
})
export class VendaModule { }
