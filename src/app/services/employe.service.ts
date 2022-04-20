import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private empPostURl = 'http://localhost:4000/employee'
  private empgetURl = 'http://localhost:4000/employee/list'
  private empDelete = 'http://localhost:4000/employee/delete'
  private empEdit = 'http://localhost:4000/employee/edit'
  id : any

  constructor(private http: HttpClient) {
  }
  
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
