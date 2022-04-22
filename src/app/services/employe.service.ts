import { Injectable } from '@angular/core';
import { HttpClient , 
        HttpRequest,
        HttpHandler,
        HttpEvent,
        HttpInterceptor} from '@angular/common/http';
import { map , Observable, of, Subject, throwError} from 'rxjs';
import { concatMap, delay, retryWhen } from 'rxjs/operators';
import { Router } from '@angular/router';


export const retryCount = 3;
export const retryWaitMilliSeconds = 5000;


@Injectable({
  providedIn: 'root'
})
export class EmployeService implements HttpInterceptor{
  private empPostURl = 'http://localhost:4000/employee'
  private empgetURl = 'http://localhost:4000/employee/list'
  private empDelete = 'http://localhost:4000/employee/delete'
  private empEdit = 'http://localhost:4000/employee/edit'
  id : any
  addUpdatevisible: Subject<boolean> = new Subject<boolean>();
  addUpdate: boolean ;

  constructor(private http: HttpClient , private route : Router) {
    this.addUpdate = false
  }

  // after adding the value updating the table 
  getAddUpdate(){
    this.addUpdate = !this.addUpdate
    this.addUpdatevisible.next(this.addUpdate)
  }

  // this will helping to reconnect with internet
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen(error => 
        error.pipe(
          concatMap((error, count) => {
            if (count <= retryCount && error.status == 1005 || !navigator.onLine) {   // here we can define the error status code which will be intercept
              this.route.navigate(['/noInternet'])
              return of(error);
            }
            else {
              this.route.navigate(['/dash-board'])
              this.getEmployee()
            }
            return throwError(error);
          }),
          delay(retryWaitMilliSeconds)
        )
      )
    )
  }
  
  // for delete user we set id and then delete on click
  setID(delID:any){
    this.id = delID
    console.log(this.id)
  }


  postEmployee(data:any){
    this.getEmployee()
    return this.http.post(this.empPostURl,data).pipe(map(user =>{
      this.getEmployee()
      return user
    }))
  }

  getEmployee(){
    console.log("employee service calling")
    return this.http.get(this.empgetURl).pipe(map(user =>{
      return user
    }))
  }

  deleteEmployee(){
    console.log(this.id)
    return this.http.delete(this.empDelete+"/"+this.id).pipe(map(user =>{
      this.getEmployee()
      console.log("delete response",user)
      return user
    }))
  }

  editEmployee(editid:any,data:any){
    console.log("user update api need to calling ",editid , "data", data)
    return this.http.patch(this.empEdit+"/"+editid , data).pipe(map(user =>{
      this.getEmployee()
      console.log("user is updated ",user)
      return user
    }))
  }
}
