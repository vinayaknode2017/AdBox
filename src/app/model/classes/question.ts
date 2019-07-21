import { Iquestion } from '../interfaces/iquestion';
import { Questiontype } from '../enum/questiontype.enum';

export class Question implements Iquestion {
    Id: number;
    QuestionType: Questiontype;
    Question: string;
    Choices: string[];
}