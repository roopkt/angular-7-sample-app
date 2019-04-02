import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsDataService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get('produts.json');
  }
}
