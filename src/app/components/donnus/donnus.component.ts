import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donnus',
  templateUrl: './donnus.component.html',
  styles: [
  ]
})
export class DonnusComponent {

  @Input() title:string = 'Title none';
  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') doughnutChartData: MultiDataSet = [[50, 100, 200]];
  @Input() colors:Color[] = [ { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] } ];

}
