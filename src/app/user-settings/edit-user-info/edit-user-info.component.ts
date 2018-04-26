import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {
  personalInfo = {firstName: 'Josean', lastName: 'Ayala',
                  phoneNumber: '9392873053', bday: '1998-02-24',
                  email: 'joseanluis@gmail.com', password: 'ThisisaPassword'};


   constructor() { }

  ngOnInit() {
  }



  onUpdate() {
    console.log('QueryUpdate ' + this.personalInfo.firstName + this.personalInfo.bday + ' ' + this.personalInfo.password);
  }
}
