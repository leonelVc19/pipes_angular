import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.items = [
        {
            label: 'New',
            icon: PrimeIcons.PLUS,
        },
        {
            label: 'Delete',
            icon: PrimeIcons.TRASH
        }
    ];
  };

  public title = 'LeoNEL VazqueZ';

}
