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


  createCat(category: Category,token:any): Observable<Category> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.post(this.caturl,JSON.stringify(category), { headers: headers });
  }


  updateCat(category: Category,token:any): Observable<Category> {
    const url = `${this.caturl}/${category.id}`;
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.put(url, JSON.stringify(category), { headers: headers });

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
    return this.http.delete(url, { headers: headers });

  }



}
