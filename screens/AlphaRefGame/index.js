import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BoardView} from "./BoardView";

export class AlphaRefGame extends React.Component{
    render() {
        return <View style={styles.container}>
            <BoardView/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#644B62',
    },
});