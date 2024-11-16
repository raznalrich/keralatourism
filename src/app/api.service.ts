import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductJewellery(){
    return this.http.get('https://fakestoreapi.com/products/category/jewelery');
  }
  getProductElectronics(){
    return this.http.get('https://fakestoreapi.com/products/category/electronics');
  }
  getProductMens(){
    return this.http.get(`https://fakestoreapi.com/products/category/men's%20clothing`);
  }
  getProductWomens(){
    return this.http.get(`https://fakestoreapi.com/products/category/women's%20clothing`);
  }
}
