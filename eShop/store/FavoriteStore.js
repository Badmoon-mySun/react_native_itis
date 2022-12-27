import { makeAutoObservable } from "mobx";

class FavouriteStore {
    favourite = new Set();

    constructor() {
        makeAutoObservable(this)
    }

    addFavourite(id: string) {
        this.favourite.add(id)
    }

    removeFavourite(id: string) {
        this.favourite.delete(id)
    }
}

export default new FavouriteStore()