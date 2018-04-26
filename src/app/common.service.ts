import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  GetUser() { return this.http.get('http://localhost:8080/getposts').map((response: Response) => response.json()); }
}
