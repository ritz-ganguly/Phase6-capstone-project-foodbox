import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuisines } from './cuisines';
import { FoodItems } from './food-items';
import { FoodItems2 } from './food-items2';
import { OrderedItems } from './ordered-items';
import { Orders } from './orders';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private url = "http://localhost:8084/admin";
  constructor(private httpClient: HttpClient) { }

  login(us: Users) {
    return this.httpClient.post(this.url + '/signIn', us, { responseType: 'text' })

  }

  adminAddCuisine(c: Cuisines) {

    return this.httpClient.post(this.url + '/addCuisine', c);
  }

  getCustomers() {

    return this.httpClient.get<Users[]>(this.url + '/getAllCustomers');
  }


  getAllCuisines() {

    return this.httpClient.get<Cuisines[]>(this.url + '/getAllCuisines');
  }

  deleteCuisine(c: Cuisines) {

    return this.httpClient.delete(this.url + '/removeCuisine', { body: c });
  }

  getUniqueCuisineNames() {

    return this.httpClient.get(this.url + '/getUniqueCuisineNames');
  }

  addFood(f: FoodItems, cName: string) {
    const params = new HttpParams().append('cuisineName', cName);
    return this.httpClient.post(this.url + '/addFoodItem', f, { params: params });
  }

  getAllOrders() {

    return this.httpClient.get<Orders[]>(this.url + '/getAllOrders');
  }


  getAllOrderedItems() {

    return this.httpClient.get<OrderedItems[]>(this.url + '/getAllOrderedItems');
  }

  getAllFoodItems() {

    return this.httpClient.get<FoodItems[]>(this.url + '/getAllFoodItems');
  }


  deleteFood(f: FoodItems2, cuisineName: string) {
    const params = new HttpParams().append('cuisineName', cuisineName);
    return this.httpClient.delete(this.url + '/removeFoodItem', { body: f, params: params })

  }

  getFoodById(id: number) {
    return this.httpClient.get<FoodItems>(this.url + '/getFoodById/' + id);

  }

  updateFoodItem(f: FoodItems, cName: string) {

    const params = new HttpParams().append('cuisineName', cName);
    return this.httpClient.put(this.url + '/updateFoodItem', f, { params: params });

  }
}
