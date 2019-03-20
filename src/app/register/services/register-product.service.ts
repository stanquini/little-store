import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Product } from '../product.interface'

@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {

  constructor(private http: HttpClient) { }

  addProduct(item: Product): Observable<any> {
    console.log(item);
    return this.http.post(environment.API + '/products', item);
  }

}
