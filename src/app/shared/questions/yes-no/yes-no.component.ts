import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Iquestion } from '../../../model/interfaces/iquestion';
import { QuestionDataServiceService } from '../../../services/question-data-service.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.css']
})
export class YesNoComponent implements OnInit, DoCheck {
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

}
