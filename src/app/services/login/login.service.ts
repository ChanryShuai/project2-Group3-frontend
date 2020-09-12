import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {

  private url:string  = "http://localhost:8080/login";

  constructor(private httpClient:HttpClient) { }

  validate(username:string, password:string){
    return this.httpClient.post(this.url, {username, password},{responseType:"text",observe:"response"});
  }
}