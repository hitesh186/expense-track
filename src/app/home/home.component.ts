import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { DataSource } from '@angular/cdk/table';
import { from, Observable } from 'rxjs';
import { Expense } from "../services/expense";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { MatSort, MatSortable } from '@angular/material';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import { ExcelService } from '../services/excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('TABLE', { static: true }) table: ElementRef;
  dataSource;

  displayedColumns = ['id', 'itemName', 'itemCategory', 'itemDate', 'itemAmount', 'actions'];

  constructor(private expenseService: ExpenseService, private exportAsService: ExportAsService, private excelService: ExcelService) {

  }

  ngOnInit() {

    this.loadExpense()


    this.expenseService.getExpense().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }
  getExpense() {
    this.expenseService.getExpense()
      .subscribe(
        results => {
          if (!results) {
            return;
          }
          this.dataSource = new MatTableDataSource(results);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource, 'GET ALL EXPENSE METHOD SUCCESSFULL')
        }
      )
  }
  loadExpense() {
    return this.expenseService.getExpense().subscribe((results: {}) => {
      this.dataSource = results;
    })
  }
  deleteExpense(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.expenseService.deleteExpense(id).subscribe((data) => {
        this.dataSource;
        this.getExpense()
        this.loadExpense()
        console.log("Expense Deleted with ID" + id);
      })
    }
  }
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Report');

    /* save to file */
    XLSX.writeFile(wb, 'Report.xlsx');

  }

}