import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { QuestionDataServiceService } from '../../../services/question-data-service.service';
import { Iquestion } from '../../../model/interfaces/iquestion';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit, DoCheck {
  @Input() questionNo: number;
  question: Iquestion;
  
  constructor(private questionDataService: QuestionDataServiceService) { }

  ngOnInit() {
  }

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
