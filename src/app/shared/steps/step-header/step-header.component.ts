import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.css']
})
export class StepHeaderComponent implements OnInit {
@Input() currentStep: string;
@Input() nextStep: string;
@Input() previousStep: string;
@Input() nextStepNum: string;
@Input() previousStepNum: string;
@Output() nextStepNumber: EventEmitter<string> = new EventEmitter();
@Output() previousStepNumber: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnSlideToNextDiv() {
    this.nextStepNumber.emit(this.nextStepNum);
  }

  OnSlideToPreviousDiv() {
    console.log(this.previousStepNum);
    this.previousStepNumber.emit(this.previousStepNum);
  }

}
