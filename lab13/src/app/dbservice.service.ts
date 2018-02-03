import { Injectable } from '@angular/core';

@Injectable()
export class DbserviceService {
  public data = [{"_id":"1",
  "name":"Asaad Saad",
  "StudID":"12345",
  "email":"asaad@mum.edu"
},{"_id":"2",
"name":"Ramy Saad",
"StudID":"12345",
"email":"test@mum.edu"
},{"_id":"3",
"name":"Mohamed Saad",
"StudID":"12345",
"email":"test@mum.edu"
},{"_id":"4",
"name":"Omr Saad",
"StudID":"12345",
"email":"test@mum.edu"
}];
  constructor() { }
  getData(){
    return this.data
}
  getById(id){
    return this.data.filter((student)=>student._id===id)
  }

  checkId(id){
    if(this.data.filter((student)=>student._id===id).length > 0)
     return true 
  return false
  }
}