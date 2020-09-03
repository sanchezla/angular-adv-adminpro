import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() { 

    // this.retunObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   value =>  console.log('Subs:', value),
    //   error => console.warn('Error:', error),
    //   () => console.info('completado')
    // )
    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }

  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(500)
    .pipe(
      // take(10),
      map(valor => valor + 1),
      filter(value => (value % 2 === 0) ? true : false)
    );
  }

  retunObservable(): Observable<number> {
    let i = -1;
    
    return new Observable<number>(
      (observer) => {
        const interval = setInterval(() => {
            i++;
            observer.next(i);
            if (i === 4) {
              clearInterval(interval);
              observer.complete();
            }

            if (i === 2) {
              observer.error('i llegó al valor de 2');
            }
        }, 1000);
    });
  }

}
