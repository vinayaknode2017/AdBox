import { Injectable } from '@angular/core';
import { Iquestion } from '../model/interfaces/iquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataServiceService {
  public questions: Array<Iquestion>;
  
  constructor() { }
}
