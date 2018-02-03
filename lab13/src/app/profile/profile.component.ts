import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '.././dbservice.service'


@Component({
  selector: 'app-profile',
  template: `
    <table>
    <tr>
    <td> {{student._id}} </td>
    <td> {{student.name}} </td>
    <td> {{student.email}} </td>
    <td> {{student.StudID}} </td>
    </tr>
    </table>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  private sub: any;
  public student: any;
  public db :any;
  constructor(private route: ActivatedRoute , private dbservice : DbserviceService  ) { 
    this.db = dbservice
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.student = this.db.getById(id)[0];
      console.log(this.student)
   });
 }

}
