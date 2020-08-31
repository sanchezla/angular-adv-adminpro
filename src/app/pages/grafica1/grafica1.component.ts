import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[] = ['Pan', 'Helados', 'Donas'];
  public data1:any[] = [[200, 100, 500]];
}
