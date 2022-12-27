import {Image, StyleSheet, View} from "react-native";

const data = [
    require('../assets/user-photo.png'),
    require('../assets/user-photo.png'),
    require('../assets/user-photo.png'),
    require('../assets/user-photo.png'),
    require('../assets/user-photo.png'),
    require('../assets/user-photo.png'),
    require('../assets/user-photo.png'),
]

function fetchPhotos() {
    return data.map(
        (photo, key) => (
            <Image style={styles.photo} source={photo} key={key}/>
        ))
}

const Photos = ({navigation}) => {
    return (
        <View style={styles.container}>
            {fetchPhotos()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    photo: {
        margin: '0.15%',
        width: '33%',
        aspectRatio: 1
    }
});


export default Photos;