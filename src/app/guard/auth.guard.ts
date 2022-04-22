import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map , take} from 'rxjs/operators'
import { LogdialogService } from '../services/logdialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authState : any

  constructor( private auth:LogdialogService , private route : Router){
    // this.auth.getAuthstate().subscribe((bool)=>{
    //   this.authState = bool
    // })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    // if(this.authState){
    //   return true
    // } else {
    //   this.route.navigate([''])
    //   return false;
    // }
    return this.auth.authenticated.pipe(
      take(1),
      map(res=> {
        // return authenticated ? true : false
        if (res){
          return true
        }  else {   
          return this.route.createUrlTree([''])
        }
      })
    )
  }
  
}


