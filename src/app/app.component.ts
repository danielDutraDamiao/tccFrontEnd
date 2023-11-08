import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[] | undefined;
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
  value: string = 'off';  


  ngOnInit() {
        this.items = [
            {
                label: 'Vendas',
                icon: 'pi pi-fw pi-file',
                routerLink: 'venda'
               
            },
            {
                label: 'Doação',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'doacao'
                
            },
            {
                label: 'Reciclagem',
                icon: 'pi pi-fw pi-user',
                
            },
        ];
    }

}
