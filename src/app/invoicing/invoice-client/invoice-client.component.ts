import { Component, OnInit } from '@angular/core';
import { User, Address } from 'src/app/core/models/user';

@Component({
  selector: 'app-invoice-client',
  templateUrl: './invoice-client.component.html',
  styleUrls: ['./invoice-client.component.scss']
})
export class InvoiceClientComponent implements OnInit {
  public user: User = new User(
    'Natonek',
    'Kamil'
  );

  constructor() { }

  ngOnInit() {
  }

}
