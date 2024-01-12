import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //*i18Select
  public name: string = "Juan";
  public gender: 'male' | 'female' = 'male';



  //*objetro literal
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };
  public changeClient():void {
    if(this.name === 'Shouko') {
      this.name = 'Juan';
      this.gender = 'male';
      return;
    }
    this.name = 'Shouko';
    this.gender = 'female';
  }



  //*i18Plural pipe
  public clients: string[] = ['Juan', 'Armando', 'Luis', 'Angel', 'Roberto', 'Sandra', 'Jasmin', 'Shouko'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }
  public deleteClient():void {
    this.clients.shift()
  }



  //*KeyValue Pipe
  public person = {
    name: 'Juan',
    age: '22',
    address: 'Ensenada, Baja California'
  };
  //objeto como si fuera un array





  //*Async pipe
  //!Observable
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  //!promesa
  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      this.person.name = 'Shouko'
    }, 3000)
  } )
}
