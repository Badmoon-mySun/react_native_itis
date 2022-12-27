import {Image, StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react-lite";
import React from "react";
import CartStore from '../store/CartStore'
import HeartButton from "./HeartButton";
import CartItemCount from "./CartItemCount";
import CartButton from "./CartButton";

const ProductItem = observer(({product}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={{uri: product.image}}/>
                <Text numberOfLines={2} style={styles.text}>{product.name}</Text>
                <Text numberOfLines={1} style={styles.price}>{product.price} рублей</Text>
                <View style={styles.buttons}>
                    {
                        CartStore.containsInCard(product.id)
                            ? <CartItemCount productId={product.id}/>
                            : <CartButton productId={product.id}/>
                    }

                    <HeartButton productId={product.id}/>
                </View>
            </View>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        width: '50%',
        minHeight: 384,
    },
    wrapper: {
        padding: '2%',
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#cbcbcb'

    },
    image: {
        width: '100%',
        height: '70%',
        borderRadius: 20,
    },
    price: {
        fontSize: 15,
        marginTop: 3,
        marginBottom: 4,
        marginHorizontal: 3,
        fontWeight: "500"
    },
    text: {
        fontSize: 15,
        marginTop: 6,
        marginBottom: 3,
        marginHorizontal: 3,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
});

export default ProductItem;