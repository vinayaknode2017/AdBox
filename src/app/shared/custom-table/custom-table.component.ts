import { Component, OnInit, Input, ViewChild, DoCheck, AfterViewInit, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Itransation } from '../../model/interfaces/itransation';
import { MatTableModule } from '@angular/material';
import { Transaction } from '../../model/classes/Transaction';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit, OnChanges {
@Input() TableData: Itransation[];

  displayedColumns: string[] = ['DateTime', 'Description', 'Amount', 'Points'];
  dataSource: MatTableDataSource<Itransation>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor() {
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Itransation>(this.TableData);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }
}
