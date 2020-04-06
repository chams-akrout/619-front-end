import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private caturl='http://localhost:9080/categories';
  constructor(private http: HttpClient) {
    this.http = http;
  }


  createCat(category: any,token:any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.post(this.caturl,category, { headers: headers });
  }


  updateCat(category: any,token:any): Observable<any> {
    const url = `${this.caturl}/${category.id}`;
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.put(url,category, { headers: headers });

  }

  getAllCats(): Observable<any> {
    const headers = new HttpHeaders({  'Access-Control-Allow-Origin':'*' });
    return this.http.get(this.caturl, { headers: headers });
  }

  getCat(id:number): Observable<any> {
    const url = `${this.caturl}/${id}`;
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin':'*' });
    return this.http.get(url, { headers: headers });
  }

  deleteCat(id:number,token:any): Observable<any> {
    const url = `${this.caturl}/${id}`;
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.delete(url, { headers: headers,responseType: 'text' });

  }



}
