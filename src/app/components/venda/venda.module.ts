import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown'; // Importe o módulo do PrimeNG
import { VendaRoutingModule } from './venda-routing.module';
import { VendaComponent } from './venda.component';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule
import { MegaMenuModule } from 'primeng/megamenu';
import { DataViewModule} from 'primeng/dataview'; // Importe o módulo DataView do PrimeNG
import { DataViewLayoutOptions } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';




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
    RatingModule
    
  ]

})
export class VendaModule { }
