import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService, AuthResponseData } from '../services/authservice.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit, OnDestroy {
private userSub: Subscription;
isAuthenticated: boolean = false;
http: HttpClient;
isLoading: boolean = false;
errorMessage: string;
function: string;

@Output() LoginEvent = new EventEmitter<boolean>();

private authObs: Observable<AuthResponseData>;

  constructor(private authService: AuthserviceService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSignIn(form: NgForm) {
    this.errorMessage = null;
    this.function = 'signin';
    this.isLoading = true;
    const email = form.value.signinEmail;
    const password = form.value.signinPassword;

    this.authObs = this.authService.onSignIn(email, password);
    this.ExtractDataFromObservable();
    
    form.reset();
  }

  onSignUp(form: NgForm) {
    this.errorMessage = null;
    this.isLoading = true;
    this.function = 'signup';
    const email = form.value.signupEmail;
    const password = form.value.signupPassword;

    this.authObs = this.authService.onSignUp(email, password);
    this.ExtractDataFromObservable();

    form.reset();
  }

  ExtractDataFromObservable() {
    this.authObs.subscribe(
      result => {
        this.isLoading = false;
        this.router.navigate(['/createsurvey']);
      },
      errorMessage => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      }
    );
  }

}
