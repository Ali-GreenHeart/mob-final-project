import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const GameInfo=()=>{
    return<View style={styles.gamePanel}>
        <View style={styles.game}>
            <Image style={styles.gameImg} source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>
            <Text style={styles.gameInfo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima modi natus necessitatibus officia qui quos, sint vel vitae voluptatem!</Text>
        </View>
        <View style={styles.game}>
            <Image style={styles.gameImg} source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
            <Text style={styles.gameInfo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima modi natus necessitatibus officia qui quos, sint vel vitae voluptatem!</Text></View>
        <View style={styles.game}>
            <Image style={styles.gameImg} source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>
            <Text style={styles.gameInfo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima modi natus necessitatibus officia qui quos, sint vel vitae voluptatem!</Text>
        </View>
    </View>
};
const styles= StyleSheet.create({
    gamePanel:{
        flex:5,
    },
    game:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#ffe237',
        alignItems:'center',
    },
    gameImg:{

        flex:1,
        height:70,
        marginHorizontal:15,
        borderRadius: 25,
    },
    gameInfo:{
        flex:4,
    },
});
