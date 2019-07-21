import { Itransation } from '../interfaces/itransation';

export class Transaction implements Itransation {
    Id: string;
    DateTime: Date;
    Description: string;
    Amount: Number;
    Points: Number;
}