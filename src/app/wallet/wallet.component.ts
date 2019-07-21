import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Itransation } from '../model/interfaces/itransation';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
private _historyJsonUrl = "assets/Transaction.json";
private transactionsData: Array<Itransation> = new Array<Itransation>();

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.transactionsData = data;
    })
   }

  ngOnInit() {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._historyJsonUrl);
  }
}
