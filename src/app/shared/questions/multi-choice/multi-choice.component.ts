import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Iquestion } from '../../../model/interfaces/iquestion';
import { IMultiChoiceAnswer } from '../../../model/interfaces/i-multi-choice-answer';
import { QuestionDataServiceService } from '../../../services/question-data-service.service';
import { Question } from '../../../model/classes/question';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.css']
})
export class MultiChoiceComponent implements OnInit, DoCheck {
  @Input() questionNo: number;
  question: Iquestion;

  constructor(private questionDataService: QuestionDataServiceService) {}

  ngOnInit() {}

  ngDoCheck() {
    if(this.questionDataService.questions && this.questionDataService.questions.length > 0) {
      this.question = this.questionDataService.questions.filter(x => x.Id === this.questionNo)[0];
    }
  }

  onAddOptions() {
    this.question.Choices.push("");
  }

  trackChoice(index: number, obj: any): any {
    return index;
  }
}
