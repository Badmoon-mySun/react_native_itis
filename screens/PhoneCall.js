import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const userProfileImage = require('../assets/profile-image.png');
const addCallMemberIcon = require('../assets/add-call-member.png');
const microphoneMuteIcon = require('../assets/microphone-mute.png');
const endCallIcon = require('../assets/end-call.png');
const videoCallIcon = require('../assets/video-call.png');

const PhoneCall = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={videoCallIcon}/>
                    <Text style={styles.infoText}>Whatsapp Call</Text>
                </View>
                <Text style={styles.name}>Lisa Jhonson</Text>
                <Text style={styles.status}>Calling</Text>
            </View>
            <Image style={styles.image} source={userProfileImage}/>
            <View style={styles.buttons}>
                <Image source={microphoneMuteIcon} style={styles.icon}/>
                <Image source={endCallIcon} style={styles.bigIcon}/>
                <Image source={addCallMemberIcon} style={styles.icon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'green',
    },
    header: {
        height: 100,
        paddingTop: 5,
        paddingHorizontal: 12,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    infoText: {
        paddingLeft: 10,
        textTransform: 'uppercase',
        fontWeight: '400',
        color: 'white'
    },
    image: {
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 5,
        height: 384,
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontWeight: '400',
        fontSize: 28,
    },
    status: {
        textTransform: 'uppercase',
        color: 'white',
        opacity: 0.75,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        flex: 1,
        height: '100%',
        width: '100%',
    },
    icon: {
        height: 40,
        width: 40,
    },
    bigIcon: {
        height: 60,
        width: 60,
    },
    smallIcon: {
        height: 30,
        width: 30,
    },
});


export default PhoneCall;
