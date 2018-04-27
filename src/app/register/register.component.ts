import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  tempFirstName: string;
  tempLastName: string;
  tempDate: string;
  tempPhone: string;
  tempEmail: string;
  tempPassword: string;

  onInsertUser() {
    console.log(this.tempFirstName + this.tempLastName + this.tempDate +  this.tempPhone +  this.tempEmail +  this.tempPassword);
  }
  constructor() { }

  ngOnInit() {
  }

}
