import { Cuisines } from "./cuisines";

export class CartDetails {
    foodId: number = 0;
    foodName: String = '';
    foodPrice: number = 0;
    cuisine: Cuisines = new Cuisines();
    description: String = '';
    isAvailable: String = '';
    imagePath: String = '';
    availableQuantity: number = 0;
    quantityOrdered: number = 0;

}
