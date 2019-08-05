import { Component, OnInit } from '@angular/core';
import { User, Address } from 'src/app/core/models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public user: User = new User(
    'Kamil',
    'Natonek',
    11471,
    new Address('Tymbark', '30', '34-650')
  );

  constructor() { }

  ngOnInit() {
  }

}
