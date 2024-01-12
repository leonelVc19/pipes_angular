import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'juan leonel';
  public nameUpper: string = 'JUAN LEONEL';
  public fullName: string = 'JuAn lEOneL'

  public customeDate: Date = new Date();
}
