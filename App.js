import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import PostList from './screens/PostList'
import PhoneCall from "./screens/PhoneCall";
import CallHistory from "./screens/CallHistory";
import Photos from "./screens/Photos";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="PostList" component={PostList}/>
                <Stack.Screen name="PhoneCall" component={PhoneCall}/>
                <Stack.Screen name="CallHistory" component={CallHistory}/>
                <Stack.Screen name="Photos" component={Photos}/>
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
