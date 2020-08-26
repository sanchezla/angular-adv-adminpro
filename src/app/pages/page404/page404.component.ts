import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component {

  public year:any = moment().format('YYYY');


}
