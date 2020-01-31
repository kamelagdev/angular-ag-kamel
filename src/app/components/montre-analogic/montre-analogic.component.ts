import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { takeUntil, map, shareReplay, tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-montre-analogic',
  templateUrl: './montre-analogic.component.html',
  styleUrls: ['./montre-analogic.component.scss']
})
export class MontreAnalogicComponent implements OnInit {

  $hour: Observable<number>;
  $min: Observable<number>;
  $sec: Observable<number>;

  constructor() { }

  ngOnInit() {
    const $date = interval(250)
      .pipe(map(() => new Date()));


this.$hour = $date.pipe(
  map(date =>(date.getHours() *30) +date.getMinutes()*0.5), distinctUntilChanged()
);

this.$min = $date.pipe(
  map(date =>date.getMinutes() * 6),
  distinctUntilChanged()
);

this.$sec = $date.pipe(
  map(date => date.getUTCSeconds() *6),
  distinctUntilChanged()
);

/*
      this.$hour= $date.pipe( map(date =>(270)));
      this.$min= $date.pipe( map(date =>(0)));
      this.$sec= $date.pipe( map(date =>(90)));
*/
  }
}
