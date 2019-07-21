import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class CreatesurveyComponent implements OnInit {

currentDivNumber: string;

  constructor() { }

  ngOnInit() {
    this.currentDivNumber = 'one';
  }

  setNextStep(nextStep: string) {
    this.currentDivNumber = nextStep;
  }
}
