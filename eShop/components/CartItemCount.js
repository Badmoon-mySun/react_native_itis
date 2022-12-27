import {Pressable, StyleSheet, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {observer} from "mobx-react-lite";
import CartStore from "../store/CartStore";

const CartItemCount = observer(({productId}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => CartStore.removeFromCart(productId)}>
                <Feather color={"tomato"} name="minus-circle" size={30}/>
            </Pressable>
            <Text style={styles.text}>{CartStore.cart.get(productId)}</Text>
            <Pressable onPress={() => CartStore.addToCart(productId)}>
                <Feather color={"tomato"} name="plus-circle" size={30}/>
            </Pressable>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        width: 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    }
});

export default CartItemCount;