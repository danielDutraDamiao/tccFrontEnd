import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { VendaRoutingModule } from './components/venda/venda-routing.module';
import { VendaModule } from './components/venda/venda.module';
import { MegaMenuModule } from 'primeng/megamenu';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr'; // Importe esta linha




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HomeRoutingModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    AnimateModule,
    CardModule,
    VendaRoutingModule,
    VendaModule,
    MegaMenuModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Adicione esta linha
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
