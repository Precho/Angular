import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  public date: Date = new Date();
  public invoiceNumber: number = Math.floor(Math.random() * 100);

  constructor() { }

  ngOnInit() {
  }

}
