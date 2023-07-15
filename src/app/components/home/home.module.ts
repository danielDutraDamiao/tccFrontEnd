import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    CarouselModule,
    CardModule,
  ]
})
export class HomeModule { }
