import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private data: DataService) { }
  employees: any;
  ngOnInit(): void {
    this.data.getEmployee().subscribe(data => {
      this.employees = data;
      console.log(this.employees.data)
    })
  }

}
