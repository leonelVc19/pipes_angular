import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public toggleUppeCase():void {
    this.isUpperCase = !this.isUpperCase;
  };
  public changeOrder(value: keyof Hero) {
    this.orderBy = value;
  };

  //table
  public heroes:  Hero[] = [
    {
      name: 'SuperMan',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Goku',
      canFly: true,
      color: Color.black,
    }
  ];


}
