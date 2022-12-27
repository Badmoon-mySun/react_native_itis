import {ScrollView, StyleSheet, View} from "react-native";
import UserCallItem from "../components/UserCallItem";

const userIcon = require('../assets/user-icon.png')

const data = [
    {
        name: 'Anvar Khasanov',
        dateTime: '06 Jan 4:00 pm',
        avatar: userIcon,
        video: false,
    },
    {
        name: 'Rinat Ziganshin',
        dateTime: '06 Jan 4:00 pm',
        avatar: userIcon,
        video: false,
    },
    {
        name: 'Anvar Khasanov',
        dateTime: '06 Jan 4:00 pm',
        avatar: userIcon,
        video: true,
    },
    {
        name: 'Rinat Ziganshin',
        dateTime: '06 Jan 4:00 pm',
        avatar: userIcon,
        video: true,
    },
    {
        name: 'Rinat Ziganshin',
        dateTime: '06 Jan 4:00 pm',
        avatar: userIcon,
        video: false,
    },
]

function fetchUsersCalls() {
    return data.map(
        (photo, key) => (
            <UserCallItem data={photo} key={key}/>
        ))
}


const CallHistory = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {fetchUsersCalls()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    }
})

export default CallHistory;