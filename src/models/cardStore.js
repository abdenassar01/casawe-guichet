import { types } from "mobx-state-tree";

import instance from "../axios/axios"

const _addToCartAsync = async (payload) => {
    try{
        const result = await instance.post("/cart/add", payload, {
            headers: {
                "Authorization": sessionStorage.getItem("token")
            }
        })
        console.log(result.data.cart)
        return result.data.cart;
    }catch(ex){
        console.log(ex)
    }    
}

// store has a type missmatch issue

const Product = types.model("product", {
    id: types.identifier,
    eventId: types.number,
    type: types.optional(types.string, ""),
    title: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    quantity: types.optional(types.integer, 0),
    offerName: types.optional(types.string, ""),
    image: types.optional(types.string, ""),
    imageSlide: types.optional(types.string, ""),
    isPlan: false,
})

const ProductStore = types.model("product_store", {
    product: types.maybe(Product),
    itemId: types.identifier,   
}).actions(self => ({

}))

const PayementMethod = types.model("paymentMethods", {
    description: types.optional(types.string, ""),
    id: types.identifier,
    logo: types.maybe(types.string),
    module: types.optional(types.string),
    title: types.optional(types.string)
})

const Cart = types.model("cart", {
    step: types.maybe(types.string),
    count: types.optional(types.number, 0),
    subTotal: types.optional(types.number, 0),
    carriers: types.optional(types.maybe , {}),
    paymentMethods: types.optional(types.array(PayementMethod), []),
    totalShipping: types.optional(types.number, 0),
    totalDiscount: types.optional(types.number, 0),
    total: types.optional(types.number, 0),
    discount: types.maybe(types.number),
    items: types.optional(types.array(ProductStore), []),
    hasPlan: false,
    totalDiscountString: types.optional(types.string, "0 MAD")
})

const CartStore = types.model("cartStore", {
    saccess: false,
    cart: types.maybe(Cart),
    message: types.optional(types.string, "")
})
.actions(self => ({
    async addItem(payload){
        // _addToCartAsync(payload)
        // self.setCart(await _addToCartAsync(payload))
        // console.log("Carte: " + self?.cart?.items)
        // console.log("Text")
    },
    removeItem(item){
        self.items.remove(item)
    },
    setCart(newCart){
        self.cart = newCart
    }
}))
.views(self => ({
    get itemsCount(){
        return self.items.length
    },
}))

let _cart;
export const useCart = () => {
    if(!_cart){
        _cart = CartStore.create({
            saccess: false,
            message: ""
        })
    }
    return _cart
}