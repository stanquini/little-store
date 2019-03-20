import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, take } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Product } from '../product.interface'

@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {

  constructor(private http: HttpClient) { }

  addProduct(item: Product): Observable<any> {
    return this.http.post(environment.API + '/products', item);
  }

  getProducts(): Observable<any> {
    return this.http.get(environment.API + '/products');
  }

  removeProduct(id) {
    return this.http.delete(environment.API + '/products/'+id);
  }

  loadById(id) {
    return this.http.get(environment.API + '/products/'+id).pipe(take(1));
  }
 
  updateProduct(item: Product, id):Observable<any> {
    console.log(item);
    return this.http.put(environment.API + '/products/'+id, item)
  }

}
