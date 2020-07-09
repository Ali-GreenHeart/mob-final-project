import React  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export const Nav = ({navigation}) => {
    return (
        <View style={styles.color}>

        <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
        <Icon name="home-circle" style={styles.img} />
        </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("All Games")}>
            <Icon name="gamepad-variant" style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Statistics")}>
            <Icon name="chart-bar" style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon name="account-circle" style={styles.img}/>
            </TouchableOpacity>

            </View>
    );
};
const styles= StyleSheet.create({

    color:{
        backgroundColor: 'gray',
        flexDirection: 'row',
        paddingTop:10,
        bottom: 0,
        position: 'absolute',
    },

    img: {
        fontSize: 50,
        marginLeft: 5,
        marginRight: 44
    }

});
