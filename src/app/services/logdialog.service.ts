import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogdialogService {
  private url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  private localurl = 'http://localhost:4000/users'
  private loginurl = 'http://localhost:4000/users/login'

  constructor(private httpClient : HttpClient) { }

  getAuthstate(){
    const user = localStorage.getItem("current_register")
    if (user){
      return user
    }
    else {
      return false
    }
  }

  getPosts(){
    return this.httpClient.get(this.url)
  }

  getRegister(data: any){
    return this.httpClient.post(this.localurl,data).pipe(map(user =>{
      localStorage.setItem('current_register',JSON.stringify(user));
      return user
    }))
  } 
  getLogin(data:any){
    return this.httpClient.post(this.loginurl,data).pipe(map(user =>{
      localStorage.setItem('Current_Login', JSON.stringify(user))
      return user
    }))
  }
}
