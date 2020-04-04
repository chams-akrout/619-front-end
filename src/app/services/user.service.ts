import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllUsers(token: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get('http://localhost:9080/users', { headers: headers });
  }

  getUser(token: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' +token });
    return this.http.get('http://localhost:9080/getuser' , { headers: headers });
  }
}
