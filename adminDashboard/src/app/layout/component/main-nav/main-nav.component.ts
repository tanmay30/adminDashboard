import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  thetab = {isYellow: true, tabname: 'Hello' };

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ontabChange(event) {
    // if (event.tab.isActive) {
    //   this.thetab.isYellow = !this.thetab.isYellow;
    // }
    this.thetab.isYellow = !this.thetab.isYellow;
  }

  }
