import {ScrollView, StyleSheet, View} from "react-native";
import PostItem from "../components/PostItem";

const userIcon = require('../assets/user-icon.png')

const data = [
    {
        photo: userIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        photo: userIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        photo: userIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        photo: userIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        photo: userIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
]

function fetchPostItems() {
    return data.map(
        (item, key) => (
            <PostItem data={item} key={key}/>
        ))
}


const PostList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {fetchPostItems()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dcdcdc',
    }
})

export default PostList;