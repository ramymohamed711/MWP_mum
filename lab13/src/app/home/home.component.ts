import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   
    <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>
  <h2>Here are some links to help you start: </h2>
 
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
