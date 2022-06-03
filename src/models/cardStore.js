import { types } from "mobx-state-tree";

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
    seatsChartId: types.maybe(types.number)
})

const ProductStore = types.model("product_store", {
    product: types.maybe(Product),
    id: types.identifier,   
}).actions(self => ({

}))

const Cart = types.model("cart", {
    count: types.optional(types.number, 0),
    subTotal: types.optional(types.number, 0),
    totalShipping: types.optional(types.number, 0),
    totalDiscount: types.optional(types.number, 0),
    total: types.optional(types.number, 0),
    discount: types.maybe(types.number),
    items: types.optional(types.array(ProductStore), []),
    carriers: types.maybe(types.array, []),
    hasPlan: false,
    totalDiscountString: types.optional(types.string, "0 MAD")
})
.actions(self => ({
    addItem(newItem){
        self.items.push(newItem)
    },
    removeItem(item){
        self.items.remove(item)
    }
}))
.views(self => ({
    get itemsCount(){
        return self.items.length
    },

}))