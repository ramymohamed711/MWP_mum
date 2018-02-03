import { Component, OnInit   } from '@angular/core';
import { DbserviceService } from '.././dbservice.service'

@Component({
  selector: 'app-students',
  template: `
 
      students works!
      <table *ngFor="let student of students">
      <tr>
      <td><a [routerLink]="['profile',student._id]">{{student.name}} </a></td>
      </tr>
      </table>
  
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
  public students;  
  constructor(private dbservice : DbserviceService) { 

   this.students = dbservice.getData()
  }

  ngOnInit() {
  }

}
