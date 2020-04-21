import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private produrl = "http://localhost:9080/products";
  constructor(private http: HttpClient) {
    this.http = http;
  }

  createProd(product: Product, token: any): Observable<Product> {
    const headers = new HttpHeaders({ Authorization: "Bearer " + token });
    return this.http.post(this.produrl, product, { headers: headers });
  }

  updateProd(product: any, token: any): Observable<any> {
    const url = `${this.produrl}/${product.id}`;
    const headers = new HttpHeaders({ Authorization: "Bearer " + token });
    return this.http.put(url, product, { headers: headers });
  }

  getAllProds(): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });
    return this.http.get(this.produrl, { headers: headers });
  }

  getProd(id: number): Observable<any> {
    const url = `${this.produrl}/${id}`;
    const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });
    return this.http.get(url, { headers: headers });
  }

  deleteprod(id: number, token: any): Observable<any> {
    const url = `${this.produrl}/${id}`;
    const headers = new HttpHeaders({ Authorization: "Bearer " + token });
    return this.http.delete(url, { headers: headers, responseType: "text" });
  }

  getLocalProducts(barcode: any): Observable<any> {
    const url = "http://localhost:9080/products/foreignBarcode";
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    return this.http.post(url, barcode, { headers: headers });
  }
}
