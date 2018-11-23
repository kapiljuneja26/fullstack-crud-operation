import { CoinService } from './../../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Coin } from '../../Coin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  coins: any;

  constructor(private http: HttpClient, private service: CoinService,private router:Router) {}

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    if(localStorage.getItem('user')){
      this.service.getCoins().subscribe(res => {
        this.coins = res;
      });
    }else{
      this.router.navigate(['']);
    }
    
  }

  deleteCoin(id) {
    this.service.deleteCoin(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
