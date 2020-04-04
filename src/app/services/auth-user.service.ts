import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ConsommateurModule } from 'src/app/models/consommateur/consommateur.module';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*',
    //'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private regUrl = 'http://localhost:9080/registration';
  private logInUrl = 'http://localhost:9080/login';
  headers: HttpHeaders;
  response:HttpResponse<any>;
  //options: RequestOptions;
  constructor(private http: HttpClient) {}

  createUser(user: ConsommateurModule): Observable<ConsommateurModule> {
    // return this.http.post(this.regUrl, JSON.stringify(user), httpOptions)
    // .map((res: HttpResponse<any>) => res.body.json());
    return this.http.post(this.regUrl,user,httpOptions);
  }

login(user: any):Observable<any>{
  return this.http.post(this.logInUrl,user,httpOptions);
}
}
