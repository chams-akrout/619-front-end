import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ConsommateurModule } from 'src/app/models/consommateur/consommateur.module';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private userssUrl = 'http://localhost:9080/users';
  headers: HttpHeaders;
  response:HttpResponse<any>;
  //options: RequestOptions;
  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({
    //  'content-Type': 'application/json',
    //  'Access-Control-Allow-Origin': '*'
    // });
   // this.options = new RequestOptions({ headers: this.headers });
  }
  
  createUser(user: ConsommateurModule): Observable<ConsommateurModule> {
    return this.http.post(this.userssUrl, JSON.stringify(user), httpOptions)
    .map((res: HttpResponse<any>) => res.body.json());
  }
login(email:string):Observable<ConsommateurModule>{
  return this.http.post(`${this.userssUrl}/home`,email, httpOptions)
  .map((res: HttpResponse<any>) => res.body.json());
}
}
