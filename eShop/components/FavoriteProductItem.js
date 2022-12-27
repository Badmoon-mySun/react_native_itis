import {Image, StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react-lite";
import React from "react";
import HeartButton from "./HeartButton";

const FavoriteProductItem = observer(({product}) => {

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={{uri: product.image}}/>
                <View style={styles.info}>
                    <Text numberOfLines={2} style={styles.text}>{product.name}</Text>
                    <Text numberOfLines={1} style={styles.price}>{product.price} рублей</Text>
                    <View style={styles.buttons}>
                        <HeartButton productId={product.id}/>
                    </View>
                </View>
            </View>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
    },
    wrapper: {
        padding: '2%',
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#cbcbcb'

    },
    image: {
        flex: 1,
        width: '40%',
        height: '90%',
        borderRadius: 5,
    },
    info: {
        flex: 2,
    },
    price: {
        fontSize: 15,
        marginTop: 3,
        marginLeft: 6,
        marginBottom: 4,
        marginHorizontal: 3,
        fontWeight: "500"
    },
    text: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 6,
        marginBottom: 3,
        marginHorizontal: 3,
    },
    buttons: {
        margin: 8,
        flex: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    }
});

export default FavoriteProductItem;