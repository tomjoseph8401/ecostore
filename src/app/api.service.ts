import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  getCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getCategoryProducts(categoryName: string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${categoryName}`);
  }

}
