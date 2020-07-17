import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomText} from "./CustomText";


export const WarningModal = ({message, functionality, style, isNotWarning}) => {
    return (
        <View style={styles.errorBg}>
            <View style={{...styles.errorModal,style}}>
                <View style={styles.warningIconContainer}>
                    {!isNotWarning ?
                        <CustomText weight={"bold"} style={styles.warningIcon}>!</CustomText> :
                        <CustomText weight={"bold"} style={styles.warningIcon}>?</CustomText>
                    }
                </View>
                <CustomText weight={"medium"} style={styles.errorText}>{message}</CustomText>
                <View style={styles.errorCloseContainer}>
                    {functionality.map((item, index) =>
                        <TouchableOpacity onPress={item.onPress} key={index}>
                            <CustomText weight={"semi"} style={styles.errorClose}>{item.button}</CustomText>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    errorBg: {
        position: 'absolute',
        backgroundColor: 'rgba(50,50,50,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        width: '100%',
        height: '130%',
        top: '-30%',
    },
    errorModal: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        zIndex: 10,
        top: '10%',
    },
    warningIcon: {
        fontSize: 30,
        color: 'white',
    },
    warningIconContainer: {
        backgroundColor: '#FFC048',
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    errorText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    errorClose: {
        fontSize: 20,
        marginTop: 5
    },
    errorCloseContainer: {
        borderTopColor: '#74B9FF',
        borderTopWidth: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
