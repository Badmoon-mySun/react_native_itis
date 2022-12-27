import {Pressable, StyleSheet, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {observer} from "mobx-react-lite";
import CartStore from "../store/CartStore";

const CartItemCount = observer(({productId}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => CartStore.addToCart(productId)}>
                <Ionicons color={"tomato"} size={40} name={"cart-outline"}/>
            </Pressable>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {},

});

export default CartItemCount;