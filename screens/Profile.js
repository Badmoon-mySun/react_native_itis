import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const userIcon = require('../assets/user-icon.png');

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Image style={styles.icon} source={userIcon}/>
                    <Text style={styles.name}>John Doe</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 256,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#618eff',
    },
    icon: {
        justifyContent: 'center',
        borderColor: '#fff',
        borderRadius: 64,
        borderWidth: 2,
        marginVertical: 16,
        height: 128,
        width: 128,
    },
    name: {
        fontWeight: '400',
        fontSize: 22,
        color: '#fff',
    }
});


export default Profile;
