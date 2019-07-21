import { Component, OnInit } from '@angular/core';
import { Iquestion } from '../../../model/interfaces/iquestion';
import { Questiontype } from '../../../model/enum/questiontype.enum';
import { QuestionDataServiceService } from '../../../services/question-data-service.service';
import { Question } from '../../../model/classes/question';

@Component({
  selector: 'app-questionnarie',
  templateUrl: './questionnarie.component.html',
  styleUrls: ['./questionnarie.component.css']
})
export class QuestionnarieComponent implements OnInit {
  questionNumber: number = 0;
  selectedQuestionIndex : number = 0;
  InputQuestion: Array<Iquestion> = new Array<Iquestion>();

  constructor(private questionDataService: QuestionDataServiceService) { 
    if(!questionDataService.questions) {
      questionDataService.questions = new Array<Iquestion>();
    }
  }
  
  ngOnInit() {}

onAddQuestion(questionType: Questiontype) {

  switch(questionType) {

    case Questiontype.YesNo:
    this.CreateYesNoQuestion();
    break;

    case Questiontype.MultiChoice:
    this.CreateMultiChoiceQuestion();
    break;

    case Questiontype.MutliSelect:
    this.CreateMultiSelectQuestion();
    break;
  }
}

CreateYesNoQuestion() {
  this.questionDataService.questions.push(
    {
      Id: ++this.questionNumber,
      QuestionType: Questiontype.YesNo,
      Question: "",
      Choices: []
    }
  )
  this.selectedQuestionIndex = this.questionDataService.questions.length - 1;
}

CreateMultiChoiceQuestion() {
  this.questionDataService.questions.push(
  {
    Id: ++this.questionNumber,
    QuestionType: Questiontype.MutliSelect,
    Question: "",
    Choices: []
  }
 )
 this.selectedQuestionIndex = this.questionDataService.questions.length - 1;
}

CreateMultiSelectQuestion() {
  this.questionDataService.questions.push(
    {
      Id: ++this.questionNumber,
      QuestionType: Questiontype.MultiChoice,
      Question: "",
      Choices: []
    }
  )
  this.selectedQuestionIndex = this.questionDataService.questions.length - 1;
  
}

onQuestionSelection(questionIndex: number) {
  this.selectedQuestionIndex = questionIndex;
}

onQuestionDeleted() {
  this.questionDataService.questions.splice(this.selectedQuestionIndex, 1);
  this.selectedQuestionIndex = 0;

 }

getQuestionNumberFromIndex(): number {
  if(this.questionDataService.questions && this.questionDataService.questions.length > 0) {
    if(this.questionDataService.questions[this.selectedQuestionIndex]) {
      return this.questionDataService.questions[this.selectedQuestionIndex].Id;
    }
  }
  return 0;
}

getSelectedQuestionTypeFromIndex(): string {
  if(this.questionDataService.questions && this.questionDataService.questions.length > 0) {
    if(this.questionDataService.questions[this.selectedQuestionIndex]) {
      console.log(this.questionDataService.questions[this.selectedQuestionIndex].QuestionType);
      return this.questionDataService.questions[this.selectedQuestionIndex].QuestionType;
    }
  }
  return null;
}

}