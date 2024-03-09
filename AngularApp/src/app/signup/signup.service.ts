import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { InformationService } from '../information.service';
import { SignUp } from './signup';

@Injectable()
export class SignupService {

  constructor(private informationservice:InformationService,
    private restService:RestService) { }

    signup(data:SignUp):Observable<any>{
      return this.restService.post(this.informationservice.signUpBaseUrl,data);
    }

}
