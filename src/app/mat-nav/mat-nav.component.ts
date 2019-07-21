import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatMenuModule, MatButtonModule, MatMenuTrigger} from '@angular/material'
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-mat-nav',
  templateUrl: './mat-nav.component.html',
  styleUrls: ['./mat-nav.component.css']
})
export class MatNavComponent implements OnInit, OnDestroy {
@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
private userSub: Subscription;
isAuthenticated: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthserviceService) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  OnlogOut() {
    this.trigger.toggleMenu();
    this.authService.logout();
  }

}
