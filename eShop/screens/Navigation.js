import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import Favorite from "../screens/Favorite";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import CartStore from "../store/CartStore";
import {observer} from "mobx-react-lite";


const Tab = createBottomTabNavigator();

const Navigation = observer(() => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Главная') {
                            iconName = focused ? 'md-home' : 'md-home-outline';
                        } else if (route.name === 'Корзина') {
                            iconName = focused ? 'basket' : 'basket-outline';
                        } else if (route.name === 'Избранное') {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Главная" component={Home}/>
                <Tab.Screen name="Корзина" component={Cart} options={{tabBarBadge: CartStore.getCountProductInCart()}}/>
                <Tab.Screen name="Избранное" component={Favorite}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
})


export default Navigation;
