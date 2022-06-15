import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  constructor( private server:HttpClient) { }
  url='http://localhost:3000/resturant'
  getdata(){
    return this.server.get(this.url)
  }
  adddata(data:any){
    return this.server.post(this.url,data)
  }
  deletedata(id:any){
    return this.server.delete(`${this.url}/${id}`)
  }
  
}
