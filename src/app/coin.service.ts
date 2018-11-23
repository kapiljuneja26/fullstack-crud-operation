import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoinService {

  result: any;
  constructor(private http: HttpClient) {}

  login(userName, password):Observable<any> {
    const uri = 'http://localhost:4000/coins/login';
    const jsonObj = {
      userName: userName,
      password: password
    };
    console.log(jsonObj);
    return this
      .http
      .post(uri, jsonObj)
      .map(this.extractData)
      .catch(this.handleError);
  }

  register(userName, password){
    const uri = 'http://localhost:4000/coins/register';
    const jsonObj = {
      userName: userName,
      password: password
    };
    console.log(jsonObj)
    return this.http.post(uri, jsonObj)
           .map(this.extractData)
           .catch(this.handleError) 
  }

  addCoin(name, price) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4000/coins';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCoin(id) {
    const uri = 'http://localhost:4000/coins/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCoin(name, price, id) {
    const uri = 'http://localhost:4000/coins/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCoin(id) {
    const uri = 'http://localhost:4000/coins/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  private extractData(res:Response){
    let body = res;
    return body || {};
  }

  private handleError(error:any){
    let errMsg=(error.message)?error.message:'server error';
    return Observable.throw(errMsg);
  }
}
