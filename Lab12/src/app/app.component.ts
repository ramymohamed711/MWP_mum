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
  getChange(data){
    console.log(data)
    // console.log(`Output message is : ${data}`)
  }
  
  
}
