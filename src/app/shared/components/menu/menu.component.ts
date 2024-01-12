import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit{
  public menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
        {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: 'No comunes y Fecha',
              icon: 'pi pi-globe',
              routerLink: 'uncommod'
            }
          ]
        },
        {
          label: 'Pipes Personalidados',
          icon: 'pi  pi-cog',
          items: [
            {
              label: 'Otros Objetos',
              icon: 'pi pi-align-left',
              routerLink: 'custom'
            }
          ]
        }
      ];
  }
}
