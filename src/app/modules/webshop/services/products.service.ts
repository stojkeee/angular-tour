import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.baseUrl}/products/category/${category}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.baseUrl}/products/categories`
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`);
  }
}
