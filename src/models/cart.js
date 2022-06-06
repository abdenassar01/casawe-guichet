import { types } from "mobx-state-tree";
import instance from "../axios/axios";

// TODO: cart always return new cart because it needs a coockie 

const _fetchCartAsync = async () => {
    try{
        const result = await instance.get("/cart", {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
            },
            withCredentials: true
        })
        return result.data.cart;
    } catch (ex){
        console.log("Error accured " + ex )
    }
}

const _addToCartAsync = async (payload) => {
    try{

        const result = await instance.post("/cart/add", payload, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
            },
            withCredentials: true
        })
        return result.data
    }catch(ex){
        console.log("unable to add " + ex)
    }
}

const Product = types.model("product", {
    id : types.optional(types.number, 0),
    eventId : types.optional(types.number, 0),
    type : types.optional(types.string, ""),
    title :  types.optional(types.string, ""),
    offerName :  types.optional(types.string, ""),
    image :  types.optional(types.string, ""),
    imageSlide :  types.optional(types.string, ""),
    price :  types.optional(types.number, 0),
    isPlan : false,
    seatsChartId :  types.maybeNull(types.string),
}).actions(self => ({
    setProduct(newProduct){
        self.id = newProduct.id;
        self.eventId = newProduct.eventId;
        self.type = newProduct.type;
        self.title = newProduct.title;
        self.offerName = newProduct.offerName;
        self.image = newProduct.image;
        self.imageSlide = newProduct.imageSlide;
        self.price = newProduct.price;
        self.isPlan = newProduct.isPlan;
    }
}))

const Item = types.model("item", {
    itemId: types.identifier,
    product: types.maybe(Product),
    quantity: types.optional(types.number, 0),
    total: types.optional(types.number, 0)
}).actions(self => ({
    setItem(data){
        self.itemId = data.itemId;
        self.product.setProduct(data.product); 
        self.quantity = data.quantity;
        self.total = data.total;
    }
}))

const PayementMethod = types.model("payement_method", {
    id : types.optional(types.number, 0),
    title : types.optional(types.string, ""),
    description : types.optional(types.string, ""),
    logo : types.maybe(types.string),
    module: types.optional(types.string, "")
}).actions(self => ({
    setPayementMethod(newPayementMethod){
        self.id = newPayementMethod.id;
        self.title = newPayementMethod.title;
        self.description = newPayementMethod.description;
        self.logo = newPayementMethod.logo;
        self.module = newPayementMethod.module;
    }
}))

const Cart = types.model("cart", {
    count : types.optional(types.number, 0),
    subTotal : types.optional(types.number, 0),
    totalShipping : types.optional(types.number, 0),
    totalDiscount : types.optional(types.number, 0),
    total : types.optional(types.number, 0),
    // discount : types.maybe(types.number),
    items : types.optional(types.array(Item), []), 
    hasPlan : false,
    paymentMethods : types.optional(types.array(PayementMethod), []),
    totalDiscountString: types.optional(types.string, "")
})
.actions(self => ({
    setCart(newCart){
        self.count = newCart.count;
        self.subTotal = newCart.subTotal;
        self.totalShipping = newCart.totalShipping;
        self.totalDiscount = newCart.totalDiscount;
        self.total = newCart.total;
        // self.discount = newCart.discount;
        self.items = newCart.items;
        self.hasPlan = newCart.hasPlan;
        self.paymentMethods = newCart.carriers;
        self.totalDiscountString = newCart.totalDiscountString;
    },
    async fetch(){
        const cart = await _fetchCartAsync();
        self.setCart(cart);
        return cart;
    },
    async addToCart(payload){
        const result = await _addToCartAsync(payload);
        self.setCart(result?.cart);

        // console.log(result)
        return(result);
    }
}))
.views(self => ({
    get getItems(){
        return self.items
    }
}))


let _cart;
export const useCart = () => {
    if(!_cart){
        _cart = Cart.create({
            count : 0,
            subTotal : 0,
            totalShipping : 0,
            totalDiscount : 0,
            total : 0,
            discount : 0,
            items : [], 
            hasPlan : false,
            paymentMethods : [],
            totalDiscountString: ""
        })
    }
    return _cart;
}