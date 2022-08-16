import { FoodItems } from "./food-items";
import { Orders } from "./orders";
import { Users } from "./users";

export class OrderedItems {
    orderedItemId: number = 0;
    quantityOrdered: number = 0;
    foodItem: FoodItems = new FoodItems();
    user: Users = new Users();
    orders: Orders = new Orders();


}
