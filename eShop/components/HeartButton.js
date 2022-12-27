import {Pressable, View} from "react-native";
import FavouriteStore from "../store/FavoriteStore";
import {Ionicons} from "@expo/vector-icons";
import {observer} from "mobx-react-lite";

const HeartButton = observer(({productId}) => {
    return (
        <View>
            <Pressable
                onPress={() =>
                    FavouriteStore.favourite.has(productId)
                        ? FavouriteStore.removeFavourite(productId)
                        : FavouriteStore.addFavourite(productId)
                }>
                <Ionicons
                    color={"tomato"} size={40}
                    name={FavouriteStore.favourite.has(productId)
                        ? "heart" : "heart-outline"}
                />
            </Pressable>
        </View>
    );
})

export default HeartButton;