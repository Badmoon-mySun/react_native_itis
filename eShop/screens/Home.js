import {Alert, FlatList, RefreshControl, StyleSheet, View} from "react-native";
import {observer} from "mobx-react-lite";
import React from "react";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import ProductStore from "../store/ProductStore";


const Home = observer(() => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [products, setProducts] = React.useState([]);

    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            let data = await ProductStore.fetchProducts()
            setProducts(data)
        } catch (e) {
            Alert.alert('Ошибка', 'Не удалось получить товары')
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchProducts()
    }, [])

    if (isLoading)
        return <Loader/>

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ProductItem product={item} />}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />}/>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});


export default Home;
