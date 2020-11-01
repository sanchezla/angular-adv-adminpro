import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  public title:string = 'Title component';
  public subsTitle$: Subscription;

  constructor(protected router: Router) {
    this.subsTitle$ = this.getRouteData().subscribe(
      ({title}) => {
        this.title = title;
        document.title = `AdminPro - ${title}`
      });
      // Se aplica destructuración de la promesa con las {}.;
  }
  ngOnDestroy(): void {
    this.subsTitle$.unsubscribe();
  }

  getRouteData() {
    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );

  }


}
