import { Component } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import {CommonService} from './common.service';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  err: string;
  checkEmail: string;
  checkPass: string;

  credential: {
    checkEmail: string,
    checkPassword: string
  }[] = [{
      checkEmail: 'j@gmail.com',
      checkPassword: 'josean'
    },
    {
      checkEmail: 'josean@gmail.com',
      checkPassword: 'josean'
    }
  ]; // Esto viene de un query

  logged = false;

  constructor(private newService: CommonService) {
    // console.log(this.Repdata);
    this.logged = localStorage.getItem('logged') === 'true';
  }
  checkCredentials() {
    if (this.checkEmail === this.credential[0].checkEmail && this.checkPass === this.credential[0].checkPassword) {
      return 1;
    } else {
      return 2;
    }

  }
  onLogIn() {
    if (this.checkCredentials() === 1) {
      this.logged = true;
      this.err = '';
      localStorage.setItem('logged', this.logged.toString());
    } else if (this.checkCredentials() === 2) {
        this.err = 'Incorrect credential';
    }
  }
  onLogOut() {
    this.logged = false;
    localStorage.removeItem('logged');
  }
  ngOnInit() {
    this.newService.GetUser().subscribe(data => this.title = data[0].title);
  }

}


