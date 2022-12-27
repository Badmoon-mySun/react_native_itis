import {makeAutoObservable} from "mobx";

class CartStore {
    cart = new Map();

    constructor() {
        makeAutoObservable(this)
    }

    addToCart(id: string) {
        if (!this.containsInCard(id)) {
            this.cart.set(id, 1)
        } else {
            this.cart.set(id, this.cart.get(id) + 1)
        }
    }

    removeFromCart(id: string) {
        if (this.containsInCard(id)) {
            this.cart.set(id, this.cart.get(id) - 1)

            if (this.cart.get(id) <= 0) {
                this.cart.delete(id)
            }
        }
    }

    containsInCard(id: string) {
        return this.cart.has(id) && this.cart.get(id) > 0
    }

    getCountProductInCart() {
        let sum = 0;
        this.cart.forEach((value) => {
            sum += value;
        });

        return sum
    }

}

export default new CartStore()