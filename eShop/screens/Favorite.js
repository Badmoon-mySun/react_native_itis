import {observer} from "mobx-react-lite";
import ProductStore from "../store/ProductStore";
import FavoriteStore from "../store/FavoriteStore";
import FavoriteProductItem from "../components/FavoriteProductItem";
import {ScrollView, View} from "react-native";

const Favorite = observer(() => {
    let data = ProductStore.products.filter((product) => {
        return FavoriteStore.favourite.has(product.id)
    })

    function getProducts() {
        return  data.map((item, key) => (
            <FavoriteProductItem key={key} product={item} />
        ))
    }


    return (
        <View>
            <ScrollView>
                {getProducts()}
            </ScrollView>
        </View>
    );
})


export default Favorite
