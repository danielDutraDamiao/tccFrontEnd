import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    CarouselModule,
    CardModule,
  ]
})
export class LoginModule { }
