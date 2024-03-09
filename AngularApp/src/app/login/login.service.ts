import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Login } from './login';
import { RestService } from '../rest.service';
import { InformationService } from '../information.service';

@Injectable()
export class LoginService {

  constructor(private restService:RestService,
    private informationService:InformationService) { }

    login(data:Login):Observable<any>{
      return this.checkLogin(data);
    }
    checkLogin(data: Login){
      return this.restService.post(this.informationService.loginBaseUrl,data);
    }
}
