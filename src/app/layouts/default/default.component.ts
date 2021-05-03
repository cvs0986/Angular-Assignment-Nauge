import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidebarOpen: boolean = true;

  @ViewChild('sidenav') sidenav: any;
 public selectedItem : string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  sidebarToggler(e:any) {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSideNav() {
    if (this.sidenav._mode == 'over') this.sidenav.close();
  }

}
