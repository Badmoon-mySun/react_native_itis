import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react-lite";
import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";
import CartProductItem from "../components/CartProductItem";

const Cart = observer(() => {
    let data = ProductStore.products.filter((product) => {
        return CartStore.cart.has(product.id)
    })

    function getProducts() {
        return  data.map((item, key) => (
            <CartProductItem key={key} product={item} />
        ))
    }

    function getFinalPrice() {
        let sum = 0;
        CartStore.cart.forEach((value, key, map) => {
            let product = ProductStore.getById(key)
            sum += product.price * value
        })

        return sum;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {getProducts()}
                <View>
                    <Text style={styles.priceText} >Итого {CartStore.getCountProductInCart()}шт. товаров</Text>
                    <Text style={styles.priceText} >Итоговая цена: {getFinalPrice()} руб.</Text>
                    <Button title="Перейти к оформлению"/>
                </View>
            </ScrollView>
        </View>
);
})

const styles = StyleSheet.create(
    {
        container: {

        },
        priceText: {
            marginHorizontal: 8,
            marginTop: 5,
            marginBottom: 20,
            fontSize: 15,
            fontWeight: '500',
        }

    }
);

export default Cart