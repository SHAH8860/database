import { Component, OnInit } from '@angular/core';
import { ResturantService } from 'src/app/service/resturant.service';

@Component({
  selector: 'app-listresturant',
  templateUrl: './listresturant.component.html',
  styleUrls: ['./listresturant.component.css']
})
export class ListresturantComponent implements OnInit {
  list:any=[]

  constructor(private ser:ResturantService) { }

  ngOnInit(): void {
    this.getdata()
    
  }
  getdata(){
    this.ser.getdata().subscribe((res:any)=>{
      this.list=res
    })
  }
  delete(id:any){
    this.list.splice(id-1,1)
    this.ser.deletedata(id).subscribe()
   
  }

}
