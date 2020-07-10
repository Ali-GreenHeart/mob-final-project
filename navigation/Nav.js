import React  from 'react';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
import {COLORS} from "../styles/colors";

export const Nav = ({navigation}) => {
    return (
        <View style={styles.color}>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
                <Icon name="home-circle" style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("All Games")}>
                <Icon name="gamepad-variant" style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Icon name="account-circle" style={styles.img}/>
            </TouchableOpacity>

        </View>
    );
};
const styles= StyleSheet.create({

    color:{
        backgroundColor: COLORS.secondBg,
        width:"100%",
        flexDirection: 'row',
        paddingTop:10,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'space-around'
    },

    img: {
        fontSize: 50,
        color: 'white'
    }

});
