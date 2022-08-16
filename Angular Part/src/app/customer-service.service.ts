import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APICart } from './apicart';
import { FoodItems } from './food-items';
import { OrderedItems } from './ordered-items';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private url = "http://localhost:8084/customer";
  constructor(private httpClient: HttpClient) { }


  login(us: Users) {
    return this.httpClient.post(this.url + '/signIn', us, { responseType: 'text' })

  }

  getPurchaseHistory(userName: string) {
    const params = new HttpParams().append('userName', userName);
    return this.httpClient.get<OrderedItems[]>(this.url + '/getPurchaseHistory', { params: params });
  }

  registration(customer: Users) {
    return this.httpClient.post(this.url + '/register', customer);



  }

  getFoodItems() {

    return this.httpClient.get<FoodItems[]>(this.url + '/getAllFoodItems');
  }

  purchaseFoods(apicd: APICart[], userName: string) {
    const params = new HttpParams().append('userName', userName);
    return this.httpClient.post(this.url + '/makePurchase', apicd, { params: params })
  }
}
