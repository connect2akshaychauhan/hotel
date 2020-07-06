import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
dynName="akshay";
mypro:Boolean;


msg:string="";
addemployee(){
this.msg="employee added in table";
}
}
