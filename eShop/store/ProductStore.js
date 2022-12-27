import { makeAutoObservable } from "mobx";

function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
    )
}

class ProductStore {
    products = [
        {
            "id": 1,
            "article": "a7a17408-6b48-4407-99db-72259f30ff8c",
            "name": "Sed vehicula ligula dapibus viverra facilisis",
            "image": "https://photo-ideal.ru/upload/iblock/222/semka_dlya_katalogov_odezhdy_2.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis quam pellentesque mi lacinia tincidunt ut mollis ipsum. Cras scelerisque ex lorem, sit amet ultricies",
            "price": 1250.00,
        },{
            "id": 2,
            "article": "a0c7707c-e658-4b3b-a4c6-e05c4a93d91a",
            "name": "Sed vehicula ligula dapibus viverra facilisis",
            "image": "https://photo-ideal.ru/upload/iblock/222/semka_dlya_katalogov_odezhdy_2.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis quam pellentesque mi lacinia tincidunt ut mollis ipsum. Cras scelerisque ex lorem, sit amet ultricies",
            "price": 740.00,
        },{
            "id": 3,
            "article": "ac588635-8a6f-4d0d-9563-2041ecc13825",
            "name": "Sed vehicula ligula dapibus viverra facilisis",
            "image": "https://photo-ideal.ru/upload/iblock/222/semka_dlya_katalogov_odezhdy_2.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis quam pellentesque mi lacinia tincidunt ut mollis ipsum. Cras scelerisque ex lorem, sit amet ultricies",
            "price": 411.00,
        }

    ]

    constructor() {
        makeAutoObservable(this)
    }

    getById(id) {
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i])
            if (this.products[i].id === id) {
                return this.products[i]
            }
        }

        return null
    }

    async fetchProducts() {
        await sleep(1500)
        return this.products
    }
}

export default new ProductStore()
