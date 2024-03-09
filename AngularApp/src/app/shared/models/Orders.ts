import { CartItem } from "./CartItem";

export class Orders{

    orderId!:number;
    customerEmailId!: string;
    dateOfOrder!:string;
    totalPrice!: number;
    orderStatus!: string;
    discount!: number;
    paymentThrough!: string;
    dateOfDelivery!: string;
    deliveryAddress!: string;
    orderedProducts!: CartItem[];
}
