import { types } from "mobx-state-tree";
import instance from "../axios/axios";

// TODO: manage cart in front end 

const _fetchCartAsync = async () => {
    try{
        const result = await instance.get("/cart", {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token"),
            },
            withCredentials: true
        })
        return result;
    } catch (ex){
        return ex.response;
    }
}

const _deleteItemAsync = async (itemId) => {
    try{
        const result = await instance.delete(`/cart/delete/${ itemId }`, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            },
            withCredentials: true
        })
        return result;
    } catch (ex){
        console.log(ex)
    }
}

const _updateCartAsync = async (itemId, payload) => {
    try{
        const result = await instance.post(`/cart/update/${itemId}`, payload, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            }
        })
        return result;
    }catch(ex){
        return ex.response;
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
        return ex.response;
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
})).views(self => ({
    get getProduct(){
        return {
            id : self.id,
            eventId : self.eventId,
            type : self.type,
            title : self.title,
            offerName : self.offerName,
            image : self.image,
            imageSlide :  self.imageSlide,
            price : self.price,
            isPlan : self.isPlan
        }
    }
}))

const Field = types.model("field", {
    type : types.optional(types.string, ""),
    name : types.optional(types.string, ""),
    label : types.optional(types.string, ""),
    validation : types.array(types.string),
    values : types.maybeNull(types.string)                      
}).views(self => ({
    get getFields(){
        return {
            type: self.type,
            name : self.name,
            label : self.label,
            validation : self.validation.map(item => ({ item })),
            values : self.values
        }
    }
}))

const Item = types.model("item", {
    itemId: types.identifier,
    product: types.maybe(Product),
    quantity: types.optional(types.number, 0),
    total: types.optional(types.number, 0),
    fields: types.array(Field)
}).actions(self => ({
    setItem(data){
        self.itemId = data.itemId;
        self.product.setProduct(data.product); 
        self.quantity = data.quantity;
        self.total = data.total;
        self.fields = data.fields
    }
})).views(self => ({
    get getItem(){
        return {
            itemId: self.itemId,
            quantity: self.quantity,
            total: self.total,
            product: self.product.getProduct,
            fields: self.fields.map(field => field.getFields )
        }
    }
}))

const PayementMethod = types.model("payement_method", {
    id : types.optional(types.number, 0),
    title : types.optional(types.string, ""),
    description : types.optional(types.string, ""),
    logo : types.maybeNull(types.string),
    module: types.optional(types.string, "")
}).actions(self => ({
    setPayementMethod(newPayementMethod){
        self.id = newPayementMethod.id;
        self.title = newPayementMethod.title;
        self.description = newPayementMethod.description;
        self.logo = newPayementMethod.logo;
        self.module = newPayementMethod.module;
    }
})).views(self => ({
    get getMethod(){
        return {
            id : self.id,
            title : self.title,
            description : self.description,
            logo : self.logo,
            module : self.module
        }
    }
}))

const Cart = types.model("cart", {
    count : types.optional(types.number, 0),
    subTotal : types.optional(types.number, 0),
    totalShipping : types.optional(types.number, 0),
    totalDiscount : types.optional(types.number, 0),
    total : types.optional(types.number, 0),
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
        self.items = newCart.items;
        self.hasPlan = newCart.hasPlan;
        self.paymentMethods = newCart.paymentMethods;
        self.totalDiscountString = newCart.totalDiscountString;
    },
    async fetch(){
        const result = await _fetchCartAsync();
        if(result.data.cart){
            self.setCart(result.data.cart);
        }
        return result;
    },
    async addToCart(payload){
        const response = await _addToCartAsync(payload);
        self.setCart(response?.cart);
        return response;
    },
    async updateQuantity(itemId, payload){
        const response = await _updateCartAsync(itemId, payload);
        if(response.status === 200 ) {
            self.setCart(response?.cart);
        }
        return response
    },
    async deleteItem(itemId){
        const response = await _deleteItemAsync(itemId);
        self.setCart(response?.data.cart)
        return response;
    }
}))
.views(self => ({
    get getItems(){
        return self.items.map(item => item.getItem )
    },
    get getPayementMethods(){
        return self.paymentMethods.map(item => item.getMethod )
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