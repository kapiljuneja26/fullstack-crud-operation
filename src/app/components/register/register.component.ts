import { Component, OnInit } from '@angular/core';
import {CoinService} from '../../coin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  flag: Boolean = false;
  constructor(private coinService:CoinService, private route: Router) { }

  ngOnInit() {
  }

  register(userName,password){
    this.coinService.register(userName, password)
    .toPromise()
    .then (()=>{
      console.log("User Registration Successfully!");
      this.route.navigate([""]);
    })
    .catch(()=>{
      this.flag = true;
    })
  }
}
