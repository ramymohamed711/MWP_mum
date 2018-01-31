import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public componentCounterValue  = 0 ; 
  public parentValue = 0 ; 
  getchange(data){
    this.parentValue = data;
    // console.log(`Output message is : ${data}`)
  }
  getchangecomp3(data){
    this.componentCounterValue = data;
    // console.log(`Output message is : ${data}`)
  }
}
