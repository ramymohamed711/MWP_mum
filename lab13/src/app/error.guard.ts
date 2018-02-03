import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbserviceService } from './dbservice.service'


@Injectable()
export class ErrorGuard implements CanActivate {
  public dbservice :any;
  constructor( db: DbserviceService){
    this.dbservice = db
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     console.log(this.dbservice)
      return this.dbservice.checkId(next.params.id)
  }
}
