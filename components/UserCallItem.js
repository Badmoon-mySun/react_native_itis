import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const phoneCallIcon = require('../assets/phone-call.png');
const videoCallIcon = require('../assets/video-call.png');

const PostItem = ({data}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.avatar} source={data.avatar}/>
                <View style={styles.text}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.date}>{data.dateTime}</Text>
                </View>
            </View>
            {data.video === false && <Image style={styles.icon} source={phoneCallIcon}/>}
            {data.video === true && <Image style={styles.icon} source={videoCallIcon}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderColor: '#b7b7b7',
        borderBottomWidth: 1,
        paddingRight: 24,
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        padding: 8,
    },
    name: {
        fontSize: 17,
        fontWeight: '500',
    },
    date: {
        fontSize: 12,
        fontColor: '#b7b7b7',
        fontWeight: '400',
        paddingLeft: 10
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    icon: {
        height: 30,
        width: 30,
    }
});

export default PostItem;