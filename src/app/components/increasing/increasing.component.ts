import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent implements OnInit {

  // Una forma de renombrar el input a colocar en el selector
  // @Input('value') progress:number = 50;
  @Input() progress:number = 50;
  @Input() increaseBtnClass:string = 'btn-primary';
  @Input() decreaseBtnClass:string = 'btn-danger';

  @Output() changePorcentEvent: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.increaseBtnClass = `btn ${this.increaseBtnClass}`;
    this.decreaseBtnClass = `btn ${this.decreaseBtnClass}`;
  }

  public valueChange(value:number) {
    if (this.progress <= 0 && value < 0) {
      return this.progress = 0;
    }
    if (this.progress >= 100 && value >= 0) {
      return this.progress = 100;
    }
    this.progress = this.progress + value;
    this.changePorcentEvent.emit(this.progress);
  }

  public changeProgress(progress:number) {
    // Con esta validación no funcionan los stylos de is-invalid
    // if (progress >= 100) {
    //   this.progress = 100;
    // } else if (progress <= 0) {
    //   this.progress = 0;
    // } else {
    //   this.progress = progress;
    // }
    // console.log(this.progress);
    this.changePorcentEvent.emit(this.progress);
  }

}
