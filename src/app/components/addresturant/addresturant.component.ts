import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResturantService } from 'src/app/service/resturant.service';
export interface List{
  name?:string,
  email?:string,
  address?:string
  
}

@Component({
  selector: 'app-addresturant',
  templateUrl: './addresturant.component.html',
  styleUrls: ['./addresturant.component.css']
})

export class AddresturantComponent implements OnInit {
  List:FormGroup|any;
  constructor(private fb:FormBuilder,private ser:ResturantService) { }

  ngOnInit(): void {
    this.List=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],

    })
  }
  add(){
    this.ser.adddata(this.List.value).subscribe()
    this.List.reset()
  }

}
