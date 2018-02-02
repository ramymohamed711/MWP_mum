import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  getChange(data){
    console.log(data)
    // console.log(`Output message is : ${data}`)
  }
  
  
}
