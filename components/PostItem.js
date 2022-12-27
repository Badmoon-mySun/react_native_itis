import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PostItem = ({data}) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image style={styles.photo} source={data.photo}/>
                <Text style={styles.text}>{data.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '3%',
        width: '94%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        marginTop: 12,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    text: {
        fontSize: 16,
        color: '#5bb5ff',
        padding: 8,
    }
});


export default PostItem;