import { Questiontype } from '../enum/questiontype.enum';

export interface Iquestion {
    Id: number;
    QuestionType: Questiontype;
    Question: string;
    Choices: Array<string>;
}