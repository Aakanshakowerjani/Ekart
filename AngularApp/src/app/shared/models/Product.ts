export class Product{
 
    id!:number;
    imageUrl!:string;
    displayName!: String;
    shortDesc!: String;
    desc?:String;
    category!: String;
    price!:number;
    discount?:number;
    deliveryCharge!:number;
    offerPrice!:number;
    seller!:String;
    sellerCount!:number
    avgRating!:number;
    review!:[
        {
            userId:number;
            userName:String
            rating:number;
            reviewComments:String;
        },
        {
            userId:number;
            userName:String;
            rating:number;
            reviewComments:String;
        },
    ]

}