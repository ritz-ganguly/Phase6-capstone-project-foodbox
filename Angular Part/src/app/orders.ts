import { Users } from "./users";

export class Orders {
    orderId: number = 0;
    totalPrice: number = 0;
    orderDate: String = '';
    user: Users = new Users();
}
