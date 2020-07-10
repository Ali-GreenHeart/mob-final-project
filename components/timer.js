import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText} from "./CustomText";
export const Timer = ({initialTime, color}) => {
    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        setTimeout(() => {
            if(time > 0) {
                setTime(time-1);
            }
        }, 1000);
    }, [time]);
    return (
        <View style={styles.container}>
            {time/60 < 10 && <CustomText style={{color: color, ...styles.text}}>0</CustomText>}
            <CustomText style={{color: color, ...styles.text}}>{Math.floor(time/60)} : </CustomText>
            {time%60 < 10 && <CustomText style={{color: color, ...styles.text}}>0</CustomText>}
            <CustomText style={{color: color, ...styles.text}}>{time%60}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(50,50,50,0.2)',
        padding: 10,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    text: {
        color: 'rgba(50,50,50,0.8)',
        fontSize: 16,
    }
});
