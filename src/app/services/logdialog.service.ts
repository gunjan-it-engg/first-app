import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { pipe , of , Observable , BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogdialogService implements OnInit{
  private url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  private localurl = 'http://localhost:4000/users'
  private loginurl = 'http://localhost:4000/users/login'
  
  authenticated : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private httpClient : HttpClient) { 
    // if(localStorage.getItem('Current_Login')){
    //   this.authenticated.next(true)
    // } else {
    //   this.authenticated.next(false)
    // }
    // this.tokenCheck() 
    // this.authenticated = new BehaviorSubject<boolean>(this.tokenAvailable());
  }

  // getAuthstate(): Observable<boolean>{
  //   if(localStorage.getItem("Current_Login") || localStorage.getItem("current_register")){
  //     this.authenticated = true
  //   } else {
  //     this.authenticated = false
  //   }
  //   return of(this.authenticated)
  // }

// returing the auth state 
  getAuthstate(): Observable<boolean>{
    return this.authenticated.asObservable()
  }
  getPosts(){  
    return this.httpClient.get(this.url)
  }

  getRegister(data: any){
    return this.httpClient.post(this.localurl,data).pipe(map(user =>{
      localStorage.setItem('current_register',JSON.stringify(user));
      this.tokenCheck()
      return user
    }))
  } 
  getLogin(data:any){
    return this.httpClient.post(this.loginurl,data).pipe(map(user =>{
      localStorage.setItem('Current_Login', JSON.stringify(user))
      this.tokenCheck()
      return user
    }))
  }

  logout(){
    localStorage.clear()
    this.tokenCheck()
    // window.location.reload()
  }
  // getToken(): string {
  //   let token = localStorage.getItem("Current_Login")!;
  //   return token;
  // }
  // tokenAvailable(): boolean {
  //   let token = this.getToken();
  //   return !token ? false : true;
  //  }

  tokenCheck():void{
    if(localStorage.getItem('Current_Login')){
      this.authenticated.next(true)
    } else {
      this.authenticated.next(false)
    }
  }

  ngOnInit(): void {
    // this.tokenCheck()
  }
}
