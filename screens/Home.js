import {Button, StyleSheet, View} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="PostList" onPress={() => navigation.navigate('PostList')}/>
            <Button title="PhoneCall" onPress={() => navigation.navigate('PhoneCall')}/>
            <Button title="CallHistory" onPress={() => navigation.navigate('CallHistory')}/>
            <Button title="Photos" onPress={() => navigation.navigate('Photos')}/>
            <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});


export default Home;
