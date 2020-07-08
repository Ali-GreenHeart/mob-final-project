import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { Dimensions } from 'react-native';

import { EndModal } from "../ColorGameScreen/EndModal"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let SIZE = 4; // four-by-four grid
let CELL_SIZE = Math.floor(width * .2); // 20% of the screen width
let CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
let BORDER_RADIUS = CELL_PADDING * 2;
let TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
let LETTER_SIZE = Math.floor(TILE_SIZE * .75);

function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

let ranNums = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

export class BoardView extends React.Component{

    state = {
        modal: false,
        i: 0
    };
    render() {
        return <View style={styles.container}>
            {this.renderTiles()}

            <EndModal visible={this.state.modal}/>

        </View>;
    }

    renderTiles() {
        let result = [];
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                let key = row * SIZE + col;
                let letter = String.fromCharCode(65 + ranNums[key]);
                let position = {
                    left: col * CELL_SIZE + CELL_PADDING,
                    top: row * CELL_SIZE + CELL_PADDING
                };
                result.push(this.renderTile(ranNums[key], position, letter))
            }
        }
        return result;
    }
    renderTile(id, position, letter) {
        return <View key={id} style={[styles.tile, position]}
                     onStartShouldSetResponder={() => this.clickTile(id)}>
            <Text style={styles.letter}>{letter}</Text>
        </View>;
    }

    clickTile(id) {
        console.log(this.state.i);
        console.log(id)

        if(id != this.state.i) {

            this.state.modal = true;
            console.log(this.state.modal);
        }
        this.state.i = this.state.i + 1;
    }
}

const styles = StyleSheet.create({
    container: {
        width: CELL_SIZE * SIZE,
        height: CELL_SIZE * SIZE,
        backgroundColor: 'transparent',
    },
    tile: {
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BEE1D2',
    },
    letter: {
        color: '#333',
        fontSize: LETTER_SIZE,
        backgroundColor: 'transparent',
    },
});