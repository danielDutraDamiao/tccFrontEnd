import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  username = '';
  password = '';

  logClick() {
    console.log('FUNCIONOU!');
  }

  logClick2() {
    console.log('PRODUTO COMPRADO COM SUCESSO!');
  }

}
