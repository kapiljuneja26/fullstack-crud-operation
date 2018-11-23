import { Component, OnInit } from '@angular/core';
import {Form, FormGroup, FormBuilder, Validator} from '@angular/forms'
import {Route, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpEventType} from '@angular/common/http';
import { error } from 'util';

import {CoinService} from '../../coin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String;
  password: String;
  flag: Boolean =false;
  constructor(private coinservice: CoinService, private router: Router) { }

  ngOnInit() {
  }
  
  login(userName, password){
    
    this.coinservice.login(userName, password).subscribe(
      data => {this.router.navigate(['index']);
      localStorage.setItem('user',userName);
    },
      (error) => {
      this.flag =true}
    )
  }
}
